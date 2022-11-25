import React from "react";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

/**
 * @typedef Props
 * @type {object}
 * @property {string} url
 */

/** @type {React.VFC<Props>} */
export const HeroImage = ({ url }) => {
  return (
    <Image
      alt={"Hero Image"}
      decoding="async"
      height="100%"
      loading="eager"
      src={url}
      width="100%"
    />
  );
};
