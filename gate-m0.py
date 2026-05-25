#!/usr/bin/env python3
"""M0 Gate — Angel Online Runtime Hygiene"""
import os, re, sys, json
from pathlib import Path

BASE = "/tmp/angel"
results = {"pages": {}, "errors": [], "warnings": []}
pages = sorted([str(p) for p in Path(BASE).rglob("*.html") if "node_modules" not in str(p)])

print(f"🔍 M0 Gate — {len(pages)} pages\n{'='*60}")

for page in pages:
    rel = os.path.relpath(page, BASE)
    with open(page) as f: html = f.read()
    
    issues = []
    
    # Check all <img> have alt
    imgs = re.findall(r'<img[^>]*>', html)
    imgs_no_alt = [i for i in imgs if 'alt=' not in i]
    if imgs_no_alt:
        for img in imgs_no_alt:
            src = re.search(r'src="([^"]*)"', img)
            issues.append(f"⚠️  img missing alt: {src.group(1) if src else 'unknown'}")
    
    # Check image paths resolve
    img_paths = re.findall(r'src="([^"]+\.(?:jpg|png|webp|svg|gif))"', html)
    for ip in img_paths:
        full = os.path.join(os.path.dirname(page), ip) if not ip.startswith('/') else os.path.join(BASE, ip.lstrip('/'))
        if not os.path.exists(full):
            issues.append(f"❌ Broken image: {ip}")
    
    # Check links
    hrefs = re.findall(r'href="([^"]*)"', html)
    for h in hrefs:
        if h.startswith(('#', 'javascript:', 'mailto:', 'tel:', 'https://', 'http://')):
            continue
        if h.startswith('//'): continue  # protocol-relative
        full = os.path.join(os.path.dirname(page), h.split('#')[0]) if h else page
        if not os.path.exists(full) and h.strip():
            issues.append(f"❌ Broken link: {h}")
    
    # Check empty anchors
    empty_anchors = [h for h in hrefs if h.startswith('#') and len(h) == 1]
    if empty_anchors:
        issues.append(f"⚠️  Empty anchors: {len(empty_anchors)}")
    
    results["pages"][rel] = {
        "issues": len(issues),
        "details": issues,
        "imgs_missing_alt": len(imgs_no_alt),
        "total_imgs": len(imgs),
    }
    status = "❌" if any(i.startswith("❌") for i in issues) else ("⚠️" if issues else "✅")
    print(f"  {status} {rel}: {len(issues)} issues" + (f" ({imgs_no_alt[0][:60]}...)" if imgs_no_alt else ""))

# Check CSS variable density
css_path = os.path.join(BASE, "assets/styles.css")
if os.path.exists(css_path):
    with open(css_path) as f: css = f.read()
    vars_in_root = re.findall(r'--([a-zA-Z0-9_-]+)\s*:', css)
    vars_used = re.findall(r'var\(--([a-zA-Z0-9_-]+)', css)
    undefined_vars = set(vars_used) - set(vars_in_root)
    unused_vars = set(vars_in_root) - set(vars_used)
    if undefined_vars:
        print(f"\n❌ CSS: {len(undefined_vars)} undefined vars: {sorted(undefined_vars)[:5]}")
    else:
        print(f"\n✅ CSS: {len(vars_in_root)} defined, {len(vars_used)} used, 0 undefined")
    results["css"] = {"defined": len(vars_in_root), "used": len(vars_used), "undefined": list(undefined_vars)}

# Check font-weight values
fw_vals = set(re.findall(r'font-weight:\s*(\d+)', css))
print(f"📊 Font-weights used: {sorted(fw_vals, key=int)}")
if len(fw_vals) > 3:
    print(f"⚠️  >3 font-weight values ({len(fw_vals)}) — Spec M1 requires convergence to 3")
    results["warnings"].append(f"font-weight爆炸: {sorted(fw_vals, key=int)}")

# Count non-hero imgs missing alt (exclude hero-background pattern)
alt_missing_non_hero = []
for page in pages:
    with open(page) as f: html = f.read()
    imgs = re.findall(r'<img[^>]*>', html)
    for img in imgs:
        if 'alt=' not in img and 'hero' not in img.lower() and 'logo' not in img.lower():
            src = re.search(r'src="([^"]*)"', img)
            alt_missing_non_hero.append(f"{os.path.relpath(page, BASE)}: {src.group(1) if src else 'unknown'}")

total_errors = sum(1 for p in results["pages"].values() for d in p["details"] if d.startswith("❌"))
total_warnings = sum(1 for p in results["pages"].values() for d in p["details"] if d.startswith("⚠️"))

print(f"\n{'='*60}")
print(f"📊 Total: {total_errors} errors, {total_warnings} warnings across {len(pages)} pages")
print(f"📊 CSS all-vars defined: {len(undefined_vars) == 0 if 'undefined_vars' in dir() else 'N/A'}")
print(f"📊 Alt missing (non-hero/non-logo): {len(alt_missing_non_hero)}")
if alt_missing_non_hero:
    print("  Missing alt on:")
    for m in alt_missing_non_hero[:10]:
        print(f"    - {m}")

# Write gate report
report = {
    "timestamp": "2026-05-25T17:20:00Z",
    "total_pages": len(pages),
    "total_errors": total_errors,
    "total_warnings": total_warnings,
    "css_undefined_vars": len(undefined_vars) if 'undefined_vars' in dir() else 0,
    "alt_missing": len(alt_missing_non_hero),
    "font_weight_values": len(fw_vals),
    "exit_code": 1 if total_errors > 0 else 0,
}
with open("/tmp/angel/gate-m0-report.json", "w") as f:
    json.dump(report, f, indent=2)

sys.exit(report["exit_code"])
