import { Navigate } from 'react-router-dom';
import { isAuth } from './isAuth';

export const Home = () => {
    const authenticated = isAuth();

    return authenticated ? <Navigate to="/blogs" /> : <Navigate to="/signin" />;
};