import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {

    return (
        <div className="container-principal">
            <BrowserRouter>
                <Routes>
                    <Route exact="false" path="https://marcos-cabral.github.io/HeroikoApp/login" element={<LoginScreen />} />
                    <Route path="*" element={<DashboardRoutes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}