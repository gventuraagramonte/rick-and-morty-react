import React from "react";
import styled from "styled-components";

const PlaceHolderStyled = styled.div`
  /* max-width: 100vw; */
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  .character-name-placeholder {
    color: rgba(0, 0, 0, 0.1);
    font-size: 600px;
    text-transform: uppercase;
    justify-content: center;
    display: flex;
    align-items: center;
    z-index: 1;
    white-space: nowrap;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
`;

export default function Placeholder({ name }) {
  return (
    <PlaceHolderStyled>
      <h1 className="character-name-placeholder">{name}</h1>
    </PlaceHolderStyled>
  );
}
