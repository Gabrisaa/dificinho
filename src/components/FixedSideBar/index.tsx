import * as S from "./styles"
import Perfil from "../../assets/perfil-de-usuario 1.png"
import { useLocation } from "react-router-dom";
export function FixedSideBar(){
      useLocation();
    return(
        <S.FixedSideBar >
        <a href="" target="_blank">   
        <img src={Perfil} alt="Perfil" />
        </a>
        </S.FixedSideBar>
    )
}
