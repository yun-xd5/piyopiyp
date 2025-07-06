// ESLint 設定ファイル
// TypeScript, React, Vite 向けの推奨設定をまとめている

import js from '@eslint/js' // JavaScript用のESLint推奨設定
import globals from 'globals' // グローバル変数定義
import reactHooks from 'eslint-plugin-react-hooks' // React Hooks用のESLintプラグイン
import reactRefresh from 'eslint-plugin-react-refresh' // ViteのReact Fast Refresh用プラグイン
import tseslint from 'typescript-eslint' // TypeScript用のESLintプラグイン
import { globalIgnores } from 'eslint/config' // グローバルで無視するパスの設定

export default tseslint.config([
  globalIgnores(['dist']), // distディレクトリをESLintの対象外にする
  {
    files: ['**/*.{ts,tsx}'], // TypeScript/TSXファイルを対象
    extends: [
      js.configs.recommended, // JavaScriptの推奨設定
      tseslint.configs.recommended, // TypeScriptの推奨設定
      reactHooks.configs['recommended-latest'], // React Hooksの推奨設定
      reactRefresh.configs.vite, // Vite用のReact Fast Refresh設定
    ],
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020を使用
      globals: globals.browser, // ブラウザ環境のグローバル変数を有効化
    },
  },
])
