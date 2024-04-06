import { Link, useNavigate } from "react-router-dom"
import { SigninType } from "@aniketh3014/bolg-common/dist/index"
import { useState } from "react";
import { AuthInput } from "./AuthInputs"
import axios from "axios";
import { SERVER_URL } from '../config.tsx';

export const Auth = () => {
    const [text, setText] = useState<SigninType>({
        email: "",
        password: "",
    });
    const navigate = useNavigate()
    async function Signin() {
        try {
            const response = await axios.post(`${SERVER_URL}/api/v1/user/signin`, text)
            localStorage.setItem('token',response.data.token)
            if (localStorage.getItem('token') ) {
                navigate("/blogs")
            } 
        }catch(e) {
            alert("Could not sign in")
        }
    } 

    return (
        <div className="flex flex-col justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-xl">
            <div className="md:flex font-ui-sans-serif">
                <div className="md:w-full">
                    <div className="p-8">
                        <div className="font-bold text-center text-3xl md:font-extrabold">
                            Welcome back!
                        </div>
                        <div className="text-gray-500 mt-2 text-center">
                            Don't have an account?
                            <Link className="underline text-gray-600" to={"/signup"}>Create one</Link>
                        </div>
                        <div className="mt-4 px-4">
                            <AuthInput label="Email" placeholder="e@example.com" onChange={(e) =>
                                setText(c => ({
                                    ...c,
                                    email: e.target.value.trim()
                                }))
                            }/>
                            <AuthInput label="Password" placeholder="" type={"password"} onChange={(e) =>
                                setText(c => ({
                                    ...c,
                                    password: e.target.value.trim()
                                }))
                            }/>
                            <button type="button" onClick={Signin} className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-3 mt-4">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}