import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import api from "./api";
import CharacterName from "./character-name";
import CharacterImage from "./character-image";
import CharacterDescription from "./character-description";
import Placeholder from "./placeholder";
import Layout from "./layout";
import Next from "./Next";
import characterContext from "./character-context";

const CharacterStyled = styled.div``;

function Character({ match }) {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(match.params.id || 1));
    }

    getCharacter();
  }, [match.params.id]);

  return (
    <CharacterStyled>
      <characterContext.Provider
        value={{
          character,
          setCharacter,
        }}
      >
        <Placeholder name={character.name} />
        <Layout
          next={<Next />}
          name={<CharacterName name={character.name} />}
          image={
            <CharacterImage image={character.image} name={character.name} />
          }
          description={
            <CharacterDescription
              status={character.status}
              gender={character.gender}
              species={character.species}
            />
          }
        />
      </characterContext.Provider>
    </CharacterStyled>
  );
}

export default Character;
