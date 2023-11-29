import * as S from "./styles"
import config from "../../assets/image 1.png"
import Lupa from "../../assets/image 2.png"

export function Header() {
    return (
        <S.Header>
            <img src={Lupa} alt="Lupola" />
       <div id="divBusca">
            <input type="text" id="txtBusca" placeholder="Buscar..." />

        </div>

            <S.NavBar>
                <ul className="header">
                    <li>
                        <a href="/FormasDeAjuda">Formas de Ajuda</a>
                    </li>

                    <li>
                        <a href="/">Página Inicial</a>
                    </li>

                </ul>
            </S.NavBar>

                <a className="engrenagem" href="https://instagram.com/gabrielaa.vilelaa" target="_blank">
                    <img src={config} alt="engrenagem de configuração" />
                </a>



        </S.Header>
    )
}

