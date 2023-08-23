import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`

  background-color:none;
  border-bottom: none;
  display: flex;
  height: 3rem;
  width: 100%;
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
#ari{
width: 40px;
}
.lili{
    display: flex;
    img{
    width: 4px;
    height: 50px;
    }
}
.engrenagem{
  display: flex;
  margin-left: 6rem;
  img{
    width: 60px;
    height: 60px;
  }
}

`

export const NavBar = styled.nav`
  /* Navegação */

background-color: none;
`
