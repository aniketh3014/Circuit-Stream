import { Link, useNavigate } from "react-router-dom"
import { SignupType } from "@aniketh3014/bolg-common/dist/index"
import { useState } from "react";
import { AuthInput } from "./AuthInputs"
import axios from "axios"
import { SERVER_URL } from "../config.tsx";

export const Auth = () => {

    const [text, setText] = useState<SignupType>({
        email: "",
        password: "",
        username: ""
    });
    const navigate = useNavigate();
    async function Signup() {
        try {
            const response = await axios.post(`${SERVER_URL}/api/v1/user/signup`, text)
            localStorage.setItem("token", response.data.token)
            navigate("/blogs")
        } catch(e) {
            alert("Could not sign up")
        }
    }

    return (
        <div className="flex flex-col justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-xl">
            <div className="md:flex font-ui-sans-serif">
                <div className="md:w-full">
                    <div className="p-10">
                        <div className="font-bold text-center text-3xl md:font-extrabold">
                            Create an account
                        </div>
                        <div className="text-gray-500 mt-2 text-center">
                            Already have an account?
                            <Link className="underline text-gray-600" to={"/signin"}> Sign in</Link>
                        </div>
                        <div className="mt-4 px-4">
                           <AuthInput label="Username" placeholder="Enter your username" onChange={(e) =>
                                setText(c => ({
                                    ...c,
                                    username: e.target.value.trim()
                                }))
                            }/>
                            <AuthInput label="Email" placeholder="e@example.com" onChange={(e) =>
                                setText(c => ({
                                    ...c,
                                    email: e.target.value.trim()
                                }))
                            }/>
                            <AuthInput label="Password" placeholder="" type={"password"} onChange={(e) =>
                                setText(c => ({
                                    ...c,
                                    password: e.target.value
                                }))
                            }/>
                            <button type="button" onClick={Signup} className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-3 mt-4">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}