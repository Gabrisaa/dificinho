import * as S from "./styles"
import Criança from "../../assets/image 5.png"
import Crinça2 from "../../assets/3e7c01cb8a19f3014b1d08412f563ef5.jpg"
export function Home() {
    return (
        <>
            <S.Section>
                <p>
                    Bem Vindo S2
                    <br />
                    Vocẽ esta como a imagem
                    <br />
                    abaixo?
                </p>
                <img src={Criança} alt="Gabriela Viela" />
                <p>
                    então vocẽ esta no
                    <br />
                    lugar certo!
                </p>
            </S.Section>
            <S.Section>
                <p>
                    Esse site foi feito com o 
                    <br />
                    intuito de ajudar pessoas que
                    <br />
                    não tem uma boa saúde mental
                </p>
                <p>
                    Lembrando que a terapia é
                    <br />
                    sempre muito bem vindo,
                    <br />
                    procure um profissional capacitado
                </p>
               <img src={Crinça2} alt="Gabriela Viela Homem" />
               <h1>
                Dias melhores estão por vir S2
               </h1>
            </S.Section>

        </>
    )
}