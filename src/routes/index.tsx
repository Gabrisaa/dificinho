import { Routes, Route } from "react-router-dom"
import { PageLayout, PageHome, PageList } from "../pages"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="FormasDeAjuda" element={<PageList/>} />
            </Route>
        </Routes>
    )
}