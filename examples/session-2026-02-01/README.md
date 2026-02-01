# 2026-02-01 セッション動画

## タイトル

**「Claudeと話してたど30分で動画自動生成システムができた話」**

## 概要

非エンジニア（営業職）が、Claude + Manus + Remotion + VOICEVOXを使って
動画自動生成システムを構築した実体験を動画化。

## ターゲット

- 非エンジニアでAIに興味ある人
- 動画作成に興味あるがハードル高いと思ってる人
- AIを使った発信に興味ある人

## 動画構成

| セクション | 時間 | 内容 |
|------------|------|------|
| オープニング | 5秒 | タイトル・フック |
| 導入 | 15秒 | 問題提起（非エンジニア、動画編集大変） |
| 解決策 | 20秒 | Claude + Manus調査→Remotion+VOICEVOX |
| 実装 | 30秒 | GitHubフォーク、npm install、起動 |
| 結果 | 20秒 | セリフ書くだけで動画完成 |
| エンディング | 10秒 | CTA（note、フォロー） |

**合計: 約1分４０秒**

## 必要なスクショ

```
images/
├── 01_manus/research.png      # Manus調査画面
├── 02_setup/github_fork.png   # GitHubフォーク
├── 02_setup/npm_install.png   # npm install成功
├── 03_remotion/studio.png     # Remotion Studio
└── 04_voicevox/download.png   # VOICEVOXダウンロード
```

## 使い方

```bash
# 1. スクリプトをコピー
cp examples/session-2026-02-01/script.ts src/data/script.ts

# 2. 音声生成
npm run voices

# 3. プレビュー
npm start

# 4. 動画出力
npm run build
```

## クレジット

- 作成者: @zDOG
- Manus調査: クオリティガイドに基づく
- テンプレート: nyanko3141592/remotion-voicevox-template
