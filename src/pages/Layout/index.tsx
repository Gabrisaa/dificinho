import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentFooter, Lateral } from "../../components"
import * as S from "./styles"
export function Layout() {
    return (
        <>
           
            <ComponentHeader />
            <Lateral/>
              <S.Fundo>
                <Outlet />
              </S.Fundo>
              <ComponentFooter />

        </>
    )
}