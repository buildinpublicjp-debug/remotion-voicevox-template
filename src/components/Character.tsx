import { Img, staticFile, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { DEFAULT_CHARACTERS, CharacterId } from "../config";
import { SETTINGS } from "../settings.generated";

interface CharacterProps {
  characterId: CharacterId;
  isSpeaking: boolean;
  emotion?: string;
}

// 表情に応じた画像ファイル名を取得
const getImageFileName = (emotion: string, mouthOpen: boolean): string => {
  const state = mouthOpen ? "open" : "close";

  if (emotion === "normal" || !emotion) {
    // 通常表情: mouth_open.png, mouth_close.png
    return `mouth_${state}.png`;
  }

  // 表情差分: {emotion}_open.png, {emotion}_close.png
  // 例: happy_open.png, surprised_close.png
  return `${emotion}_${state}.png`;
};

export const Character: React.FC<CharacterProps> = ({
  characterId,
  isSpeaking,
  emotion = "normal",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const characterConfig = DEFAULT_CHARACTERS.find((c) => c.id === characterId);

  if (!characterConfig) {
    return null;
  }

  const isLeft = characterConfig.position === "left";

  // 口パクアニメーション（話している時、約6fpsで口を開閉）
  const mouthOpen = isSpeaking ? Math.floor(frame / 5) % 2 === 0 : false;

  // 話している時のアニメーション（上下に揺れる）
  const bounceY = isSpeaking
    ? interpolate(Math.sin(frame * 0.3), [-1, 1], [-3, 3])
    : 0;

  // 登場アニメーション（画面端からスライドイン）
  const slideIn = interpolate(frame, [0, fps * 0.5], [isLeft ? -200 : 200, 0], {
    extrapolateRight: "clamp",
  });

  // 話している時のスケール（少し大きく）
  const scale = isSpeaking ? 1.02 : 1;

  // 画像パスを取得（表情差分対応）
  const basePath = SETTINGS.character.imagesBasePath;
  const imageFileName = getImageFileName(emotion, mouthOpen);
  const currentImage = `${basePath}/${characterId}/${imageFileName}`;

  // 設定ファイルのuseImagesフラグをチェック
  const hasImage = SETTINGS.character.useImages;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        [characterConfig.position]: slideIn,
        transform: `translateY(${bounceY}px) scale(${scale})`,
        transformOrigin: isLeft ? "bottom left" : "bottom right",
      }}
    >
      {hasImage ? (
        <Img
          src={staticFile(currentImage)}
          style={{
            height: SETTINGS.character.height,
            objectFit: "contain",
            transform: characterConfig.flipX ? "scaleX(-1)" : "none",
          }}
        />
      ) : (
        // 画像がない場合のプレースホルダー
        <div
          style={{
            width: 200,
            height: 300,
            background: `${characterConfig.color}20`,
            border: `4px solid ${characterConfig.color}`,
            borderRadius: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 48 }}>
            {characterId === "zundamon" ? "🟢" : "🩷"}
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: characterConfig.color,
              marginTop: 8,
            }}
          >
            {characterConfig.name}
          </div>
        </div>
      )}
    </div>
  );
};
