import * as S from "./styles"
import config from "../../assets/image 1.png"
import line from "../../assets/Line 7.png"

export function Header() {
    return (
        <S.Header>
    
            <S.NavBar>
                <ul className="header">
                    <li>
                        <a href="/Formas de ajuda ">Formas de Ajuda</a>
                    </li>

                    <li>
                        <a href="/Relatos">Relatos</a>
                    </li>
                    
                </ul>
            </S.NavBar>
            <a className="lili"> <img scr={line} alt="linha" /> </a>
            <a className="engrenagem"  href="https://instagram.com/gabrielaa.vilelaa" target="_blank"> 
            <img src={config} alt="engrenagem de configuração" />
            </a>
           
        </S.Header>
    )
}

