import React, { useContext } from "react";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="container-principal">
            <BrowserRouter>
                <Routes>
                    <Route exact="false" path="/login" element={<LoginScreen />} />
                    <Route path="*" element={<DashboardRoutes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}