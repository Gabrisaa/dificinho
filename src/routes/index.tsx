import { Routes, Route } from "react-router-dom"
import { PageLayout, PageHome } from "../pages"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
            </Route>
        </Routes>
    )
}