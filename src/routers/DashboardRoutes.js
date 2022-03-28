import React, { useContext } from 'react'
import { Navbar } from '../components/ui/Navbar'
import {
    Route,
    Routes,
} from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';

export const DashboardRoutes = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="https://marcos-cabral.github.io/HeroikoApp/marvel" element={<PrivateRoute isAuthenticated={user.logged} component={MarvelScreen} />} />
                <Route exact path="https://marcos-cabral.github.io/HeroikoApp/dc" element={<PrivateRoute isAuthenticated={user.logged} component={DcScreen} />} />
                <Route exact path="https://marcos-cabral.github.io/HeroikoApp/hero/:heroeId" element={<PrivateRoute isAuthenticated={user.logged} component={HeroScreen} />} />
                <Route exact path="https://marcos-cabral.github.io/HeroikoApp/search" element={<PrivateRoute isAuthenticated={user.logged} component={SearchScreen} />} />
                <Route path="*" element={<PrivateRoute isAuthenticated={user.logged} component={MarvelScreen} />} />
            </Routes>
        </>
    )
}
