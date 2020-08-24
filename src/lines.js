import React from "react";
import styled from "styled-components";

const LineStyles = styled.span`
  width: 2px;
  height: 150px;
  background: black;
  display: inline-flex;
  margin-inline: 15px;
`;
function Lines() {
  return <LineStyles />;
}

export default Lines;
