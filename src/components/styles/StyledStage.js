import styled from "styled-components";

//controls size of stage
export const StyledStage = styled.div`
  display:grid;
  grid-template-rows:repeat(
      ${props => props.height},
      calc(50vw/ ${props => props.width})
  );

  grid-template-columns:repeat(${props => props.width},1fr);
      grid-gap:1px;
      border:2px solid #333;
      width:100%;
      background:#111;
`;
