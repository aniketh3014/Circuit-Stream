import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ContentAtom, TitleAtom } from "../../atoms/InputAtoms";

export const PublishButton = () => {
    const navigate = useNavigate();
    const jwt = localStorage.getItem("token");
    const title = useRecoilValue(TitleAtom);
    const content = useRecoilValue(ContentAtom);
    const trimmedContent = content.trim();
    const trimmedTitle = title.trim();

    const handleSubmit = async () => {
        await axios.post(
            `${SERVER_URL}/api/v1/blog`,
            {
                title: trimmedTitle,
                content: trimmedContent,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );
        navigate("/blogs");
    };
    return (
        <button type="button" onClick={handleSubmit}className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 py-2.5 px-5 me-2 mb-2 text-sm font-medium rounded-lg border">Publish</button>
    )
}