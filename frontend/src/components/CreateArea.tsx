import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const CreateArea = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const jwt = localStorage.getItem('token');
    let trimed = content.trim()
    const navigate = useNavigate();
    const handleSubmit = async () => {
        await axios.post(`${SERVER_URL}/api/v1/blog`, {
            title:title,
            content:trimed  
        },{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        navigate("/blogs");
    }

    return (
        <div className="p-4">
            <div className="flex justify-center text-6xl border-transparent focus:border-transparent focus:ring-0">
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value.trim())} 
                    placeholder="Title"
                />
            </div>
            
            <div className="flex justify-center">
                <ReactQuill onChange={setContent} className="my-4"/>
            </div>
            
            <button onClick={handleSubmit}type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Publish
            </button>
            {content}
        </div>
    );
}