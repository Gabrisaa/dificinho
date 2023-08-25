import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"

export const Footer = styled.footer`
  background-color: ${colors.rodaroda};
  img{
    height: 100%;
  }
  display: flex;
  height: 4.5rem;
  border-top: 0.5rem solid black;
  margin-left: calc(${vars.size_side_bar} );
`