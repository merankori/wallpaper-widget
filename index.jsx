import { css } from "uebersicht";

const settings = require("./settings.json");

const container = css`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const blurEl = css`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(12px);
`;

const mediaBgEl = css`
  z-index: -2;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const mediaEl = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const render = () => {
  const mediaSource = settings.isLocal
    ? `wallpaper/${settings.type}/${settings.fileName}`
    : settings.src;

  switch (settings.type) {
    case "image":
      return (
        <div className={container}>
          <img src={mediaSource} className={mediaBgEl} />
          <div className={blurEl}></div>
          <img src={mediaSource} className={mediaEl} />
        </div>
      );
    case "video":
      return (
        <div className={container}>
          <video autoPlay loop muted playsInline className={mediaBgEl}>
            <source src={mediaSource} />
          </video>
          <div className={blurEl}></div>
          <video autoPlay loop muted playsInline className={mediaEl}>
            <source src={mediaSource} />
          </video>
        </div>
      );
    default:
  }
};
