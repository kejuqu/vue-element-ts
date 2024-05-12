# vue3-element-ts

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
pnpm build

# Runs the end-to-end tests
pnpm test:e2e
# Runs the tests only on Chromium
pnpm test:e2e --project=chromium
# Runs the tests of a specific file
pnpm test:e2e tests/example.spec.ts
# Runs the tests in debug mode
pnpm test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Feature

- login/sign, login will redirect to previous route [mock done]

#### TODO:

- layout
  - sidebar (Avatar, Menu)
    - menu - read area & Expenses record

Header
Dropdown + PageHeader + Search/AutoComplete
Badge - 通知

Index：- Calendar 展示当前的日期 - Card 展示个人信息，当前任务 - Carouse 跑马灯

Content: - 新增个人信息 Form + Drawer - Cascader （地址）- Checkbox 选中爱好 - DatePicker 选择日期 - InputNumber 输入幸运数字 - Radio 性别 - Select 学历 - Switch 是否信息可见 - Upload 上传头像
message 展示成果 or 失败

    - 个人信息展示栏
    	Card + Skeleton
