import React from "react";

/**
 * @typedef Props
 * @property {string} src
 * @property {number} width
 * @property {number} height
 */

/** @type {React.VFC<Props>} */
export const TrimmedImage = ({ height, src, width }) => {
  const aspectRatio = !!width && !!height ? `${width} / ${height}` : "auto"; 
  return (
    <img
      height={height}
      loading="lazy"
      src={src.replace(".jpg", ".webp")}
      style={{ aspectRatio, objectFit: "cover" }}
      width={width}
    />
  );
};
