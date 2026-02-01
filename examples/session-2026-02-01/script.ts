// 動画タイトル: 「Claudeと話してたど30分で動画自動生成システムができた話」
// 長さ: 約2分（Twitter向け、テンポ良く）
// ターゲット: 非エンジニアでAIに興味ある人

import { ScriptLine } from '../../src/types';

export const scriptData: ScriptLine[] = [
  // ===========================================
  // オープニング（5秒）
  // ===========================================
  {
    id: 1,
    character: "zundamon",
    text: "今日は、クロードと話してたど30分で動画自動生成システムができた話をするのだ！",
    displayText: "今日は、Claudeと話してたど30分で動画自動生成システムができた話をするのだ！",
    emotion: "happy",
    pauseAfter: 10,
  },
  {
    id: 2,
    character: "metan",
    text: "30分で？本当にできるのかしら？",
    emotion: "surprised",
    pauseAfter: 5,
  },

  // ===========================================
  // 導入・問題提起（15秒）
  // ===========================================
  {
    id: 3,
    character: "zundamon",
    text: "ぼくは営業職で、エンジニアじゃないのだ",
    pauseAfter: 5,
  },
  {
    id: 4,
    character: "zundamon",
    text: "でも、エーアイを使った発信をしたくて、自動で動画が作れたらいいなと思ってたのだ",
    displayText: "でも、AIを使った発信をしたくて、自動で動画が作れたらいいなと思ってたのだ",
    pauseAfter: 5,
  },
  {
    id: 5,
    character: "metan",
    text: "動画編集って大変よね。プレミアプロとか難しいし",
    displayText: "動画編集って大変よね。Premiere Proとか難しいし",
    pauseAfter: 5,
  },

  // ===========================================
  // 解決策の提示（20秒）
  // ===========================================
  {
    id: 6,
    character: "zundamon",
    text: "そこで、クロードに相談したのだ！",
    displayText: "そこで、Claudeに相談したのだ！",
    emotion: "happy",
    pauseAfter: 5,
  },
  {
    id: 7,
    character: "zundamon",
    text: "まず、マナスっていうエーアイに徹底調査させたのだ",
    displayText: "まず、Manusっていう調査AIに徹底調査させたのだ",
    pauseAfter: 5,
    visual: { type: "image", src: "images/01_manus/research.png" }
  },
  {
    id: 8,
    character: "metan",
    text: "調査結果はどうだったの？",
    pauseAfter: 3,
  },
  {
    id: 9,
    character: "zundamon",
    text: "リモーションとボイスボックスを組み合わせるのがベストだとわかったのだ！",
    displayText: "RemotionとVOICEVOXを組み合わせるのがベストだとわかったのだ！",
    emotion: "happy",
    pauseAfter: 5,
  },

  // ===========================================
  // 実装過程（30秒）
  // ===========================================
  {
    id: 10,
    character: "zundamon",
    text: "で、ギットハブにあるテンプレートをフォークして",
    displayText: "で、GitHubにあるテンプレートをフォークして",
    pauseAfter: 3,
    visual: { type: "image", src: "images/02_setup/github_fork.png" }
  },
  {
    id: 11,
    character: "zundamon",
    text: "エヌピーエム インストールして",
    displayText: "npm installして",
    pauseAfter: 3,
    visual: { type: "image", src: "images/02_setup/npm_install.png" }
  },
  {
    id: 12,
    character: "metan",
    text: "コマンド打つだけでいいの？",
    pauseAfter: 3,
  },
  {
    id: 13,
    character: "zundamon",
    text: "そうなのだ！リモーションスタジオも一発で起動したのだ！",
    displayText: "そうなのだ！Remotion Studioも一発で起動したのだ！",
    emotion: "happy",
    pauseAfter: 5,
    visual: { type: "image", src: "images/03_remotion/studio.png" }
  },
  {
    id: 14,
    character: "metan",
    text: "すごいわね！でも音声はどうするの？",
    pauseAfter: 3,
  },
  {
    id: 15,
    character: "zundamon",
    text: "ボイスボックスをダウンロードして、エーピーアイで連携するのだ",
    displayText: "VOICEVOXをダウンロードして、APIで連携するのだ",
    pauseAfter: 5,
    visual: { type: "image", src: "images/04_voicevox/download.png" }
  },
  {
    id: 16,
    character: "zundamon",
    text: "台本を書いたら、自動で音声が生成されるのだ！",
    emotion: "happy",
    pauseAfter: 5,
  },

  // ===========================================
  // 結果・メリット（20秒）
  // ===========================================
  {
    id: 17,
    character: "metan",
    text: "つまり、セリフを書くだけで動画ができるってこと？",
    emotion: "surprised",
    pauseAfter: 3,
  },
  {
    id: 18,
    character: "zundamon",
    text: "その通りなのだ！しかも、クロードコードに指示するだけで台本も作ってくれるのだ！",
    displayText: "その通りなのだ！しかも、Claude Codeに指示するだけで台本も作ってくれるのだ！",
    emotion: "happy",
    pauseAfter: 5,
  },
  {
    id: 19,
    character: "metan",
    text: "非エンジニアでも本当にできるのね",
    emotion: "happy",
    pauseAfter: 3,
  },
  {
    id: 20,
    character: "zundamon",
    text: "エンジニアじゃなくても、エーアイと一緒なら何でもできるのだ！",
    displayText: "エンジニアじゃなくても、AIと一緒なら何でもできるのだ！",
    emotion: "happy",
    pauseAfter: 5,
  },

  // ===========================================
  // エンディング（10秒）
  // ===========================================
  {
    id: 21,
    character: "zundamon",
    text: "詳しいやり方は、ノートに書くから見てほしいのだ！",
    displayText: "詳しいやり方は、noteに書くから見てほしいのだ！",
    pauseAfter: 5,
  },
  {
    id: 22,
    character: "metan",
    text: "フォローもよろしくね！",
    emotion: "happy",
    pauseAfter: 3,
  },
  {
    id: 23,
    character: "zundamon",
    text: "それじゃあ、またなのだ！",
    emotion: "happy",
    pauseAfter: 10,
  },
];

// ===========================================
// 必要なスクショ
// ===========================================
// 
// images/01_manus/research.png      - Manus調査画面
// images/02_setup/github_fork.png   - GitHubフォーク画面
// images/02_setup/npm_install.png   - npm install成功画面
// images/03_remotion/studio.png     - Remotion Studio画面
// images/04_voicevox/download.png   - VOICEVOXダウンロード画面
//
// ===========================================
// タイミング目安
// ===========================================
// 
// オープニング: 5秒
// 導入: 15秒
// 解決策: 20秒
// 実装: 30秒
// 結果: 20秒
// エンディング: 10秒
// 合計: 約100秒（1分40秒）
