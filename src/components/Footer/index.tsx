import * as S from "./styles"
import Insta from "../../assets/image 4.png"
import Twitter from "../../assets/download.png"

export function Footer(){
    return (
        <S.Footer>
            <a href="https://instagram.com/gabrielaa.vilelaa" target="_blank">
                <img src={Insta} alt="Instagram" />
            </a>
            <a href="https://twitter.com/gabrisela_1" target="_blank">
                <img src={Twitter} alt="Twitter" />
            </a>
        </S.Footer>
    )
}