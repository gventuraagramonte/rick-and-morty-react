import React from "react";
import styled from "styled-components";
import Dot from "./dot";
import LearnMore from "./learn-more";
import Lines from "./lines";
import Logo from "./logo";
import Social from "./social";

const LayoutStyled = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  height: calc(100vh - 8em);
  padding: 4em;
  grid-column-gap: 8em;
  grid-template-columns: 50px 1fr 1fr 200px;
  grid-template-rows: 230px 100px 1fr 1fr 1fr;
  grid-template-areas: "asset-top logo logo social" "name character-name avatar avatar" "about character-description avatar avatar" "asset-bottom character-text avatar avatar" "asset-bottom learn-more arrow other-line";

  .name-area {
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    grid-area: character-name;
    /* padding-inline-start: 1em; */
  }

  .image-area {
    grid-area: avatar;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description-area {
    grid-area: character-description;
  }

  .next-area {
    grid-area: arrow;
    display: flex;
  }

  .social-area {
    grid-area: social;
    /* border: 1px solid red; */
  }

  .logo-area {
    grid-area: logo;
  }

  .learn-more-area {
    grid-area: learn-more;
    /* border: 1px solid red; */
  }

  @media screen and (max-width: 1024px) {
    height: auto;
    padding: 2em 0;
    width: calc(100vw - 2em);
    margin: 0 auto;
    column-gap: 1em;
    grid-template-columns: 50px 1fr 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas: "logo logo logo" "name avatar avatar" "name character-name character-name" "about character-description character-description" "arrow arrow arrow" "social social social";

    .name-area {
      margin-top: 1em;
      justify-content: center;
    }

    .social-area {
      text-align: center;
      margin-top: 2em;
    }
  }

  @media screen and (max-width: 1440px) {
    column-gap: 2em;
  }
`;
function Layout({ name, image, description, next }) {
  return (
    <LayoutStyled>
      <span className="asset top">
        <Dot />
        <Dot />
        <Dot />
        <Lines />
      </span>
      <div className="logo-area">
        <Logo />
      </div>
      <div className="social-area">
        <Social />
      </div>
      <div className="navigation name">
        <a href="#">Name</a>
      </div>
      <div className="name-area">{name}</div>
      <div className="image-area">{image}</div>

      <div className="navigation about">
        <a href="#">About</a>
      </div>

      <div className="description-area">{description}</div>

      <span className="asset bottom">
        <Lines />
        <Dot />
        <Dot />
        <Dot />
      </span>

      <div></div>
      <div className="learn-more-area">
        <LearnMore />
      </div>
      <div className="next-area">{next}</div>
    </LayoutStyled>
  );
}

export default Layout;
