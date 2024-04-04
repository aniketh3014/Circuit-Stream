import { useNavigate } from "react-router-dom"
export const WriteButton = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => {
            navigate("/create")
        
        }} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-gray-200 rounded-lg border border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100">
            Write
        </button>
    )
}