import { isAuth } from './isAuth';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const authenticated = isAuth();

    if (authenticated) {
        navigate('/blogs');
    } else {
        navigate('/signin');
    }

    return null;
};