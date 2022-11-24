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
  const aspectRatio = !!width && !!height ? `${width} / ${height}` : "auto";
  return (
    <img
      alt={alt}
      decoding="async"
      height={height}
      loading="lazy"
      src={src.replace(".jpg", ".webp")}
      style={{ aspectRatio, objectFit: "cover" }}
      width={width}
    />
  );
};
