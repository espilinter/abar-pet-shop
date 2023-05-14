import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes, PrivateRoutes, ProtectRoutes } from "./index"
import { INTERNAL_PATHS } from "../config/routes.config";
import React from "react";

const LazyFramePage = React.lazy(() => import("../pages/framePage/framePage"))


export const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path={INTERNAL_PATHS.FRAME} element={<LazyFramePage />} />
                </Route>
                <Route element={<PrivateRoutes />}></Route>
                <Route element={<ProtectRoutes />}></Route>
            </Routes>
        </BrowserRouter>
    )
}