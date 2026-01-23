# Remotion + VOICEVOX 動画テンプレート

ずんだもん＆めたんの掛け合い紹介動画を簡単に作成できるテンプレートです。

![デフォルトの黒板風デザイン](https://img.shields.io/badge/デザイン-黒板風-2d5a3d)
![解像度](https://img.shields.io/badge/解像度-1920x1080-blue)
![フレームレート](https://img.shields.io/badge/FPS-30-green)

## 特徴

- **対話的な動画作成** - Claude Codeと会話しながら動画を作成
- **自動音声生成** - VOICEVOXで高品質な音声を自動生成
- **口パクアニメーション** - キャラクターが自然に話しているように見える
- **表情差分対応** - happy, surprised, thinking, sad などの表情切り替え
- **カスタマイズ可能** - YAMLファイルでフォント、色、レイアウトを簡単変更

---

## クイックスタート

### 1. 必要なもの

| ソフト | 説明 |
|--------|------|
| [Node.js 18+](https://nodejs.org/) | JavaScript実行環境 |
| [VOICEVOX](https://voicevox.hiroshiba.jp/) | 無料の音声合成ソフト |
| [Claude Code](https://claude.ai/code) | 対話的に動画を作成（推奨） |

### 2. セットアップ

```bash
git clone https://github.com/nyanko3141592/remotion-voicevox-template.git my-video
cd my-video
npm install
```

### 3. VOICEVOXを起動

VOICEVOXアプリを起動しておいてください。

### 4. 動画を作成

```bash
claude  # Claude Codeを起動
```

Claude Codeに話しかけるだけ：

```
「〇〇の紹介動画を作りたい」
```

---

## 使い方の流れ

```
1. 「〇〇の紹介動画を作りたい」と伝える
       ↓
2. Claudeがセリフを作成
       ↓
3. 「音声生成して」
       ↓
4. 「プレビュー見せて」で確認
       ↓
5. 修正があれば指示
       ↓
6. 「動画出力して」で完成！
```

---

## よく使う指示

| やりたいこと | 指示の例 |
|-------------|---------|
| 新規作成 | 「〇〇の紹介動画を作って」 |
| セリフ修正 | 「ID 3のセリフを変更して」 |
| 発音修正 | 「GitHubをギットハブって発音して」 |
| 音声生成 | 「音声を生成して」 |
| プレビュー | 「プレビュー見せて」 |
| 動画出力 | 「動画を出力して」 |

---

## コマンド一覧

| コマンド | 説明 |
|---------|------|
| `npm start` | プレビュー（http://localhost:3000） |
| `npm run voices` | 音声生成 |
| `npm run build` | 動画出力（out/video.mp4） |
| `npm run init` | 新規プロジェクト初期化 |

---

## キャラクター画像

`video-settings.yaml`で`useImages: true`に設定し、画像を配置：

```
public/images/
├── zundamon/
│   ├── mouth_open.png   # 口開き（必須）
│   ├── mouth_close.png  # 口閉じ（必須）
│   ├── happy_open.png   # 表情差分（任意）
│   └── ...
└── metan/
    └── ...
```

画像がない場合はプレースホルダーが表示されます。

---

## カスタマイズ

`video-settings.yaml`でスタイルを変更できます：

```yaml
font:
  family: "Noto Sans JP"
  size: 48
  color: "#ffffff"

character:
  height: 367
  useImages: true

colors:
  zundamon: "#228B22"
  metan: "#FF1493"
```

---

## 詳しい使い方

詳細は **[CLAUDE.md](./CLAUDE.md)** を参照してください。

---

## ライセンス

MIT License

キャラクター（ずんだもん・四国めたん）の利用規約は各公式サイトをご確認ください。
