import { Navigate, useLocation } from 'react-router-dom';
import { isAuth } from './isAuth';

export const ProtectedRoute = ({ children }:any) => {
    const authenticated: boolean = isAuth();
    const location = useLocation();

    return authenticated ? children : <Navigate to="/signin" state={{ from: location }} />;
};