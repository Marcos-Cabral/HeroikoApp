import React from "react";
import {
    HashRouter,
    Route,
    Routes,
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {

    return (
        <div className="container-principal">
            <HashRouter>
                <Routes>
                    <Route exact="false" path="/login" element={<LoginScreen />} />
                    <Route path="*" element={<DashboardRoutes />} />
                </Routes>
            </HashRouter>
        </div>
    )
}