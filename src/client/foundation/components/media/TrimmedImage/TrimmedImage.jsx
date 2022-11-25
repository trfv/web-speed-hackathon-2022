import React from "react";

/**
 * @typedef Props
 * @property {string} alt
 * @property {string} src
 * @property {number} width
 * @property {number} height
 */

/** @type {React.VFC<Props>} */
export const TrimmedImage = ({ alt, height, src, width }) => {
  const aspectRatio = `${width} / ${height}`;
  const isOverable = width > 320; // width が画面幅を超えうる場合。あらゆる場面でうまく動く気はしないが、VRTを突破するためにこれを入れてみる。
  return (
    <img
      alt={alt}
      decoding="async"
      height={isOverable ? "100%" : height}
      loading={isOverable ? "eager" : "lazy"}
      src={src.replace(".jpg", ".webp")}
      style={{ aspectRatio, maxHeight: height, objectFit: "cover" }}
      width={isOverable ? "100%" : width}
    />
  );
};
