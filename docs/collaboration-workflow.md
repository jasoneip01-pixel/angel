# 协作机制：Codex × Ariste

本项目后续协作以 GitHub 为唯一信息交换中心。聊天中可以做方向确认，但任务状态、结论、交付物、风险和验收证据都必须沉淀在 GitHub Issue、PR 或仓库文档中。

## 总原则

- `main` 只保留可部署状态，GitHub Pages 从 `main` 根目录发布生产站。
- 大改动先走分支和 PR；确认后再合并到 `main`。
- 所有任务必须有对应 Issue；没有 Issue 的代码变更默认不进入主线。
- 任何人不得回滚对方已提交的工作。发现冲突时，先在相关 Issue 留言说明。
- 文档默认中文。

## 角色分工

| 角色 | 主责任 | 不应主动修改 |
| --- | --- | --- |
| Codex | 总体协调、主视觉重构、核心页面实现、image2 资产落地、GitHub Pages 部署 | Ariste 的审计报告原文 |
| Ariste | 独立审计、竞品调研、SEO/OG/结构化数据、QA 巡检、文档沉淀 | `assets/styles.css`、`index.html`、`summer-hua/index.html`、`life/index.html` 的 P0 主视觉实现 |

## 文件 Ownership

| 范围 | Owner | 说明 |
| --- | --- | --- |
| `index.html` | Codex | 首页主视觉、首屏、转化结构 |
| `summer-hua/index.html` | Codex | 夏令营申请转化页 |
| `life/index.html` | Codex | 生命成长/书籍共读页 |
| `assets/styles.css` | Codex | 视觉系统、响应式、组件样式 |
| `assets/images/` | Codex | image2 生成图与旧站素材整理 |
| `consult/index.html`、`assets/app.js` | Codex 主导，Ariste QA | 表单、参数预填、sticky CTA 行为 |
| `docs/` | Ariste 主导，Codex 补充 | 调研、审计、实现计划、验收记录 |
| SEO/OG/JSON-LD | Ariste 主导 | 可改各页面 `<head>`，但不要改主体布局 |

## Issue 使用规范

每个 Issue 必须包含：

- 目标：这项工作要解决什么问题。
- Owner：Codex 或 Ariste。
- 文件范围：允许改哪些文件。
- 交付物：代码、文档、截图、链接或报告。
- 验收标准：怎么判断完成。
- 状态更新：按评论追加，不覆盖历史。

推荐状态评论格式：

```md
状态：进行中 / 等待 / 已完成 / 阻塞
已做：
证据：截图、链接、commit、deploy URL
风险：
需要对方：
```

## 分支与 PR 规则

- Codex 主视觉分支：`codex/p0-visual-redesign`
- Ariste 支持分支：`ariste/seo-qa-docs`
- 大改动通过 PR 汇总讨论；小文档补充可直接在 GitHub 上提交，但需关联 Issue。
- PR 描述必须链接相关 Issue，并附至少一张桌面截图和一张移动端截图。

## 当前 P0 路线

1. Codex 完成首页、夏令营页、生命成长页的视觉重构。
2. Codex 使用 image2 生成并落地关键视觉资产。
3. Ariste 并行做 SEO/QA/文档，不改主视觉核心文件。
4. Codex 部署 GitHub Pages 并做生产前检查。
5. Ariste 做部署后审计，所有问题回到 GitHub Issue。

## 冲突处理

- 如果必须改对方 owner 的文件，先在对应 Issue 留言，写明原因、范围和风险。
- 如果生产站出现严重问题，先新建或更新 `blocked` Issue，再决定热修。
- 视觉方向以用户确认和 `design-research-unified.md` 为准；实现细节以 PR 截图和线上效果为准。
