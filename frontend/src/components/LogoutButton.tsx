import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate("/signin")
    }

    return (
        <button onClick={logout} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-gray-200 rounded-lg border border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100">
            Logout
        </button>
    );
}