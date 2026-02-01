# 📸 スクリーンショット整理ガイド（Claude Code用）

## 目的

デスクトップのスクリーンショットを分析し、動画に使える画像を選別・整理する。

---

## 出力先

```
public/images/
├── 01_manus/       # Manus調査関連
├── 02_setup/       # 環境構築（GitHub, npm, ターミナル）
├── 03_remotion/    # Remotion Studio画面
├── 04_voicevox/    # VOICEVOX関連
├── 05_result/      # 完成した動画、成果物
└── 99_unused/      # 使わないが保存しておく
```

---

## タスク手順

### Step 1: スクショ一覧を取得

```bash
ls -la ~/Desktop/ | grep -E "スクリーンショット|Screenshot|2026-0[12]"
```

### Step 2: 各画像を分析

画像を1枚ずつ開いて、以下を判定：

1. **何が写っているか**（ツール名、画面名）
2. **どのカテゴリか**（manus/setup/remotion/voicevox/result/unused）
3. **動画のどのシーンで使うか**

### Step 3: カテゴリごとにコピー

```bash
# フォルダ作成
mkdir -p public/images/{01_manus,02_setup,03_remotion,04_voicevox,05_result,99_unused}

# コピー例
cp ~/Desktop/スクリーンショット2026-02-01_XX.png public/images/03_remotion/studio.png
```

### Step 4: 整理結果をレポート

```markdown
## スクショ整理結果

### 01_manus/ (X枚)
| ファイル名 | 内容 | 使用シーン |
|-----------|------|----------|
| manus_research.png | Manus調査画面 | ID 7 |
```

---

## カテゴリ判定ガイド

### 01_manus/
- Manusの対話画面
- 調査結果のファイル一覧

### 02_setup/
- GitHub（フォーク、クローン）
- ターミナル（npm install）
- VS Code

### 03_remotion/
- Remotion Studio（localhost:3000）
- プレビュー画面

### 04_voicevox/
- VOICEVOXダウンロードページ
- VOICEVOXアプリ画面

### 05_result/
- 完成した動画のスクショ

### 99_unused/
- 関係ない画面
- ブレ、暗い、使えない画像

---

## ファイル命名規則

```
{カテゴリ番号}_{連番}_{内容}.png

例:
02_01_github_fork.png
03_01_remotion_studio.png
```

---

## 注意事項

- **個人情報が写っている画像は除外**
- **同じ内容の重複は1枚だけ残す**
- **画質が悪いものは使わない**