import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: 'gotu', serif;
    box-sizing: border-box;
  }
  
  body{
    background-color:#DDC0C0 ;

  }
`

export const colors = {
  
  quadradinho: "#EEDCDC",
  fundo: "#DDC0C0",
  rodaroda:"#ED6464",
  white: "#fff",
  black: "#000"
}
export const vars = {
  size_side_bar:"80px"
}