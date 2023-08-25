import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`

  background-color:none;
  border-bottom: none;
  display: flex;
  height: 4.3rem;
  width: 100%;
  border-bottom: 0.4rem solid black;
  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
  }
  nav{
    width: 90%;
    padding-left:2rem;
  }
  img{
    width:50px;
  }
  nav ul{
    padding-top: 1rem;
    width: 100%;
    list-style-type:none;
    display:flex;
    justify-content: end;
    font-size:26px;
                                          
  }
  nav ul a{
    text-decoration:none;
    color: ${colors.black};
    padding: 1rem; 
  }
  nav ul li:hover{
  
  color:${colors.quadradinho}
  
       
}
.lili{
    display: flex;
    width: 4px;
    padding-left: 7.5rem;
    img{
    width: 4px;
    height: 65px;
    }
}
.engrenagem{
  display: flex;
  padding-left: 5rem;
  img{
    width: 60px;
    height: 60px;
  }
}

div {
  width:3rem;

}

`

export const NavBar = styled.nav`
  /* Navegação */

background-color: none;
`
