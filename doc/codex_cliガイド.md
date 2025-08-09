# Codex CLI 初期セットアップと基本操作の流れ

## 1. 起動
```
codex
```

## 2. 初回起動時の設定
Codex CLI を初めてフォルダで起動すると、以下のようなメッセージが表示されます。

```
Since this folder is version controlled, you may wish to allow Codex
to work in this folder without asking for approval.

1. Yes, allow Codex to work in this folder without asking for approval
2. No, ask me to approve edits and commands
```

これは **Codex がこのフォルダ内でファイル編集やコマンド実行を自動で行う許可を与えるか** の確認です。

- **1. Yes** → 毎回の承認なしで自動実行可能（効率重視）
- **2. No** → 実行ごとに承認が必要（安全重視）

## 3. 待機画面と基本コマンド
起動後は次のような待機画面になります。

```
To get started, describe a task or try one of these commands:

/init - create an AGENTS.md file with instructions for Codex
/status - show current session configuration and token usage
/diff - show git diff (including untracked files)
/prompts - show example prompts
```

### 主なコマンド
- `/init` → Codex の指示ファイル `AGENTS.md` を作成
- `/status` → 設定やトークン使用量を表示
- `/diff` → Git の差分を表示（未追跡ファイル含む）
- `/prompts` → サンプルプロンプト一覧を表示

## 4. タスク依頼方法
待機状態でそのまま自然言語で指示できます。例：

```
/diff
```

```
README.mdを日本語に翻訳して
```

これにより Codex が該当タスクを実行します。
