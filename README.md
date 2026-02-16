# Prospect

> 在线简历生成器 —— 支持多模板、主题色、中英双语，可导出 JSON 与打印 PDF。

## 功能特性

- **多模板**：经典、现代、极简三种简历模板
- **主题色**：15 种预设颜色，一键切换
- **中英双语**：界面与简历内容均支持 zh / en 切换
- **导入导出**：JSON 配置导入、导出，便于备份与迁移
- **打印 / PDF**：预览模式下可直接打印或另存为 PDF
- **URL 参数**：`?template=minimal&lang=en&mode=preview` 支持分享固定配置

## 技术栈

| 技术 | 用途 |
|------|------|
| React 18 + TypeScript | 核心框架 |
| Vite | 构建工具 |
| UnoCSS | 原子化 CSS |
| Ant Design 5 | UI 组件 |
| i18next + react-i18next | 国际化 |
| i18n-ally | 编辑器内联翻译提示（VS Code） |

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
pnpm dev
```

访问 http://localhost:5173

### 构建

```bash
pnpm build
```

产物输出到 `dist/`。

### 预览构建结果

```bash
pnpm preview
```

头部 GitHub 图标指向的源码仓库地址来自 `package.json` 的 `homepage` 字段，修改该字段即可更换链接。

## 项目结构

```
src/
├── main.tsx              # 应用入口
├── App.tsx               # 根组件：布局、URL 参数、导入导出
├── types/
│   └── resume.ts         # 简历数据结构与默认值
├── locales/
│   ├── i18n.ts           # i18n 配置
│   └── lang/             # 中英翻译文件
│       ├── zh-CN.json
│       └── en.json
├── components/
│   ├── ResumeForm.tsx    # 简历编辑表单
│   ├── ResumePreview.tsx # 预览容器（A4 尺寸）
│   └── TemplateSelector.tsx
└── templates/            # 简历模板
    ├── Classic.tsx       # 经典
    ├── Modern.tsx        # 现代
    ├── Minimal.tsx       # 极简
    └── index.ts          # 模板注册
```

## URL 参数说明

| 参数 | 说明 | 示例 |
|------|------|------|
| `template` | 模板 ID | `classic` / `modern` / `minimal` |
| `lang` | 界面语言 | `zh` / `en` |
| `mode` | 模式 | `edit` / `preview` |

示例：`/?template=minimal&lang=en&mode=preview` 打开极简模板、英文、预览模式。

## 自定义开发

### 新增简历模板

1. 在 `src/templates/` 下新建组件，实现 `TemplateProps` 接口
2. 在 `src/templates/index.ts` 中注册
3. 在 `src/types/resume.ts` 的 `TemplateId` 中加入新模板 ID
4. 在 `App.tsx` 的 `templateOptions` 和 `parseUrlParams` 中补充新选项

### 新增翻译

- 编辑 `src/locales/lang/zh-CN.json` 和 `en.json`
- 在组件中使用 `t('key')` 引用

## 许可证

MIT
