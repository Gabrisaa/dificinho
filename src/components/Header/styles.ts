import styled from "styled-components"
import { colors, vars} from "../../styles/GlobalStyle"

export const Header = styled.header`

  background-color:none;
  border-bottom: none;
  display: flex;
  height: 4.3rem;
  border-bottom: 0.4rem solid black;
  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
  }
  margin-left: calc(${vars.size_side_bar} ); /* Same as the width of the sidebar */
  padding: 1rem;
  nav{
    width: 90%;
    padding-left:2rem;
  }
  img{
    width:50px;
  }
  nav ul{
    width: 100%;
    align-items: center;
    list-style-type: none;
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

.engrenagem{
  display: flex;
  img{
  width: auto;
  align-items: center;
  padding-left: 2rem;
  height: auto;
  }
}

div {
  width:3rem;

}
#txtBusca {
   float: left;
    background-color: white;
    padding-left: 40rem;
    font-style: italic;
    font-size: 18px;
    border-radius: 200px;
    height: 105%;
    width: 100%;
    align-items: center;
    display: flex;
}

@media(max-width:1300px){
  nav ul{
    width: 100%;
    align-items: center;
    list-style-type: none;
    display:flex;
    font-size:21px;
                                          
  }
}

@media(max-width:1225px){
  nav ul{
    width: 100%;
    align-items: center;
    list-style-type: none;
    display:flex;
    font-size:15px;

    #txtBusca {
   float: left;
    background-color: white;
    font-style: italic;
    font-size: 18px;
    border-radius: 200px;
    height: 105%;
    width: 50%;
    align-items: center;
    display: flex;
}
                                          
  }
}

`

export const NavBar = styled.nav`
  /* Navegação */

background-color: none;
`
