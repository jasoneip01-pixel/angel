# SEO/OG/结构化数据实施规范

> Owner: Ariste | Issue #3 | 版本 v1.0
> 本文件定义各页面 `<head>` 需新增的 meta 标签和结构化数据，不含主体布局修改。

## 2026-05-26 执行状态

- 已在 10 个 HTML 入口补齐 description、canonical、Open Graph、Twitter Card 与 JSON-LD。
- 已新增 `robots.txt` 与 `sitemap.xml`，站点地图覆盖首页、暑假华学苑、生命成长力、咨询、营地、文章、家庭入口。
- 已产出并接入 3 张 1200×630 OG 图片：`og-home.jpg`、`og-summer.jpg`、`og-life.jpg`。
- `contact/` 与 `summer-hua/apply/` 为兼容入口，canonical 统一指向实际咨询入口 `/consult/`；`404.html` canonical 指向首页。

## 全局规则

- 所有页面新增 OG + Twitter Card + Canonical URL + JSON-LD
- 不改 CSS、不改 `<body>`、不改 Codex 负责的主视觉文件
- base URL: `https://jasoneip01-pixel.github.io/angel`

---

## 1. 首页 index.html

### 现状
✅ title, description 已有
❌ 缺失：OG, Twitter, canonical, JSON-LD

### 新增代码

```html
<!-- Open Graph -->
<meta property="og:title" content="天使在线 · 华学苑｜让成长在真实生活里被看见、被托住">
<meta property="og:description" content="《生命成长力》帮助家庭从问题看见结构；暑假华学苑让孩子在28天真实共同生活里，向下扎根，向上生长。">
<meta property="og:url" content="https://jasoneip01-pixel.github.io/angel/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="zh_CN">
<meta property="og:site_name" content="天使在线 · 华学苑">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="天使在线 · 华学苑｜让成长在真实生活里被看见、被托住">
<meta name="twitter:description" content="《生命成长力》帮助家庭从问题看见结构；暑假华学苑让孩子在28天真实共同生活里，向下扎根，向上生长。">
<meta name="twitter:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://jasoneip01-pixel.github.io/angel/">

<!-- JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "天使在线 · 华学苑",
  "url": "https://jasoneip01-pixel.github.io/angel/",
  "description": "《生命成长力》帮助家庭从问题看见结构；暑假华学苑让孩子在28天真实共同生活里，向下扎根，向上生长。",
  "sameAs": []
}
</script>
```

### 分享预览（微信/飞书/LinkedIn）

标题：天使在线 · 华学苑｜让成长在真实生活里被看见、被托住
描述：《生命成长力》帮助家庭从问题看见结构；暑假华学苑让孩子在28天真实共同生活里，向下扎根，向上生长。
图片：og-home.jpg（需 Codex 产出，1200×630，秦岭山水+品牌字/留白）

---

## 2. 夏令营页 summer-hua/index.html

### 新增代码

```html
<!-- Open Graph -->
<meta property="og:title" content="暑假华学苑｜28天真实成长场域">
<meta property="og:description" content="2026暑假华学苑：7月12日至8月8日，西安秦岭。面向三年级至高中孩子的28天住宿制真实成长场域。">
<meta property="og:url" content="https://jasoneip01-pixel.github.io/angel/summer-hua/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-summer.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="zh_CN">
<meta property="og:site_name" content="天使在线 · 华学苑">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="暑假华学苑｜28天真实成长场域">
<meta name="twitter:description" content="2026暑假华学苑：7月12日至8月8日，西安秦岭。面向三年级至高中孩子的28天住宿制真实成长场域。">
<meta name="twitter:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-summer.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://jasoneip01-pixel.github.io/angel/summer-hua/">

<!-- JSON-LD (Event) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "2026暑假华学苑",
  "description": "面向三年级至高中孩子的28天住宿制真实成长场域。在经典、山水、师友与共同生活里，向下扎根，向上生长。",
  "startDate": "2026-07-12",
  "endDate": "2026-08-08",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "西安秦岭营地",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "西安",
      "addressRegion": "陕西",
      "addressCountry": "CN"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "天使在线 · 华学苑",
    "url": "https://jasoneip01-pixel.github.io/angel/"
  }
}
</script>
```

---

## 3. 生命成长页 life/index.html

### 新增代码

```html
<!-- Open Graph -->
<meta property="og:title" content="《生命成长力》｜从一本书回到一个家的日常">
<meta property="og:description" content="《生命成长力》帮助家庭从问题看见结构，从真实回声、作者回应和家庭小步，回到一个家的日常。">
<meta property="og:url" content="https://jasoneip01-pixel.github.io/angel/life/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-life.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="zh_CN">
<meta property="og:site_name" content="天使在线 · 华学苑">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="《生命成长力》｜从一本书回到一个家的日常">
<meta name="twitter:description" content="《生命成长力》帮助家庭从问题看见结构，从真实回声、作者回应和家庭小步，回到一个家的日常。">
<meta name="twitter:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-life.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://jasoneip01-pixel.github.io/angel/life/">

<!-- JSON-LD (Book) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "生命成长力",
  "description": "帮助家庭从问题看见结构，从真实回声、作者回应和家庭小步，回到一个家的日常。",
  "author": {
    "@type": "Organization",
    "name": "天使在线 · 华学苑"
  },
  "url": "https://jasoneip01-pixel.github.io/angel/life/"
}
</script>
```

---

## 4. 咨询页 consult/index.html

### 新增代码

```html
<!-- Open Graph -->
<meta property="og:title" content="预约一对一咨询｜天使在线 · 华学苑">
<meta property="og:description" content="预约老师一对一咨询：了解孩子是否适合暑假华学苑，获取《生命成长力》购书、共读和家庭支持入口。">
<meta property="og:url" content="https://jasoneip01-pixel.github.io/angel/consult/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="zh_CN">
<meta property="og:site_name" content="天使在线 · 华学苑">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="预约一对一咨询｜天使在线 · 华学苑">
<meta name="twitter:description" content="预约老师一对一咨询：了解孩子是否适合暑假华学苑，获取《生命成长力》购书、共读和家庭支持入口。">
<meta name="twitter:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://jasoneip01-pixel.github.io/angel/consult/">
```

---

## 5. 辅助页面（camps / articles / portal / 404）

### camps/index.html

```html
<!-- Open Graph -->
<meta property="og:title" content="近期支持｜天使在线 · 华学苑">
<meta property="og:description" content="近期支持入口：暑假华学苑、读者共读、家庭咨询与已报名家庭服务。">
<meta property="og:url" content="https://jasoneip01-pixel.github.io/angel/camps/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="zh_CN">
<meta property="og:site_name" content="天使在线 · 华学苑">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="近期支持｜天使在线 · 华学苑">
<meta name="twitter:description" content="近期支持入口：暑假华学苑、读者共读、家庭咨询与已报名家庭服务。">
<meta name="twitter:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://jasoneip01-pixel.github.io/angel/camps/">
```

### articles/index.html

```html
<!-- Open Graph -->
<meta property="og:title" content="文章｜天使在线 · 华学苑">
<meta property="og:description" content="天使在线与华学苑文章入口：父母成长、青春期沟通、学校适应与真实成长故事。">
<meta property="og:url" content="https://jasoneip01-pixel.github.io/angel/articles/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="zh_CN">
<meta property="og:site_name" content="天使在线 · 华学苑">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="文章｜天使在线 · 华学苑">
<meta name="twitter:description" content="天使在线与华学苑文章入口：父母成长、青春期沟通、学校适应与真实成长故事。">
<meta name="twitter:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://jasoneip01-pixel.github.io/angel/articles/">
```

### portal/index.html

```html
<!-- Open Graph -->
<meta property="og:title" content="已报名家庭入口｜天使在线 · 华学苑">
<meta property="og:description" content="已报名家庭入口说明：成长档案、活动记录、账号获取与咨询帮助。">
<meta property="og:url" content="https://jasoneip01-pixel.github.io/angel/portal/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="zh_CN">
<meta property="og:site_name" content="天使在线 · 华学苑">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="已报名家庭入口｜天使在线 · 华学苑">
<meta name="twitter:description" content="已报名家庭入口说明：成长档案、活动记录、账号获取与咨询帮助。">
<meta name="twitter:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://jasoneip01-pixel.github.io/angel/portal/">
```

### 404.html

```html
<meta name="description" content="页面未找到，请返回首页或联系天使在线 · 华学苑获取帮助。">

<!-- Open Graph (minimal for 404) -->
<meta property="og:title" content="页面未找到｜天使在线 · 华学苑">
<meta property="og:description" content="页面未找到，请返回首页或联系天使在线 · 华学苑获取帮助。">
<meta property="og:url" content="https://jasoneip01-pixel.github.io/angel/404.html">
<meta property="og:type" content="website">
<meta property="og:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="zh_CN">
<meta property="og:site_name" content="天使在线 · 华学苑">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="页面未找到｜天使在线 · 华学苑">
<meta name="twitter:description" content="页面未找到，请返回首页或联系天使在线 · 华学苑获取帮助。">
<meta name="twitter:image" content="https://jasoneip01-pixel.github.io/angel/assets/images/og-home.jpg">

<!-- Canonical (point to home, this is a 404) -->
<link rel="canonical" href="https://jasoneip01-pixel.github.io/angel/">
```

---

## OG 图片资产

| 文件 | 用途 | 尺寸 | 建议内容 |
|------|------|------|------|
| `assets/images/og-home.jpg` | 首页/通用分享 | 1200×630 | 秦岭山水+品牌字/留白 |
| `assets/images/og-summer.jpg` | 夏令营页分享 | 1200×630 | 营地场景/孩子背影+营期信息 |
| `assets/images/og-life.jpg` | 生命成长页分享 | 1200×630 | 书籍/书桌/温暖光 |

三张图片已产出并用于对应页面；非核心页继续使用 `og-home.jpg` 作通用分享图。

---

## 实施顺序

1. ✅ 本文档作为 SEO 规范交付
2. ✅ Codex 产出 OG 图片 → Ariste 验证图片可访问
3. ✅ Ariste 批量写入 `<head>` 标签到 10 个 HTML 文件
4. ⬜ 提交 PR 关联 Issue #3，附带 diff
5. ⬜ 部署后验证：`curl` + 微信分享预览 + Twitter Card Validator

## 对标参考

亲近母语(qjmy.cn)的 SEO 完整度是行业标杆：OG+Twitter+JSON-LD+Canonical+Keywords 全部齐全。华学苑当前缺失所有这些。本次实施将补齐到同等水平。
