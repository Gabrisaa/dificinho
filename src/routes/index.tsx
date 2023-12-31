import { Routes, Route } from "react-router-dom"
import { PageAdm, PageCadastrar, PageHome, PageLayout, PageList, PageLogin } from '../pages'
import ProtectedRoute from './ProtectedRoute'

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="FormasDeAjuda" element={<PageList/>} />
                <Route path="/cadastrar" element={<PageCadastrar />} />
                <Route path="/login" element={<PageLogin />} />
                <Route path="/adm" element={<ProtectedRoute />}>
                  <Route path="" element={<PageAdm />} />
                </Route>  
            </Route>
        </Routes>
    )
}