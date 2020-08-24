import React, { useContext } from "react";
import styled from "styled-components";
import characterContext from "./character-context";
import NProgress from "nprogress";
import { useHistory } from "react-router-dom";

const NextStyled = styled.div`
  cursor: pointer;
  /* border: 1px solid red; */
  background-image: url("./images/arrow.svg");
  background-repeat: no-repeat;
  background-position: left bottom;
  flex: 1;

  @media screen and (max-width: 1024px) {
    user-select: none;
    height: 50px;
    background-position: center;
  }
`;
function Next() {
  const context = useContext(characterContext);
  const history = useHistory();

  async function handleClick() {
    NProgress.start();
    history.push(`${context.character.id + 1}`);
    // context.setCharacter(await api.getCharacter(context.character.id + 1));
    NProgress.done();
  }

  return <NextStyled onClick={handleClick}></NextStyled>;
}

export default Next;
