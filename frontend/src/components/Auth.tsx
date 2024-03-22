import { Link } from "react-router-dom"
import { SignupType } from "@aniketh3014/bolg-common/dist/index"
import { useState } from "react";
import { AuthInput } from "./AuthInputs"

export const Auth = ({type}: {type: "signin | signup"}) => {

    const [text, setText] = useState<SignupType>({
        email: "",
        password: "",
        username: ""
    });

    return (
        <div className="flex flex-col justify-center h-screen">
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-xl">
            <div className="md:flex font-ui-sans-serif">
                <div className="md:w-full">
                    <div className="p-8">
                        <div className="font-bold text-center text-3xl md:font-extrabold">
                            Create an account
                        </div>
                        <div className="text-gray-500 mt-2 text-center">
                            Already have an account? 
                            <Link className="underline text-gray-600" to={"/signin"}> Login</Link>
                        </div>
                        <div className="mt-4">
                            <AuthInput label="Username" placeholder="Enter your username" onChange={(e) =>
                                setText(c => ({
                                    ...c,
                                    username: e.target.value
                                }))
                            }/>
                            <AuthInput label="Email" placeholder="e@example.com" onChange={(e) =>
                                setText(c => ({
                                    ...c,
                                    email: e.target.value
                                }))
                            }/>
                            <AuthInput label="Password" placeholder="" type={"password"} onChange={(e) =>
                                setText(c => ({
                                    ...c,
                                    password: e.target.value
                                }))
                            }/>
                            <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 mt-4">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}