import { Link } from "react-router-dom"

export const CreateButton = () => {
    return <Link to={'/create'}>
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 py-2.5 lg:px-5 px-2 me-2 mb-2 text-sm font-medium rounded-lg border">Write post</button>
    </Link>
}