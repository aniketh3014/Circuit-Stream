import { Link } from "react-router-dom"
import { SignupType } from "@aniketh3014/bolg-common/dist/index"
import { useState } from "react";
import { AuthInput } from "./AuthInputs";

export const Auth = ({type}: {type: "signin | signup"}) => {

    const [text, setText] = useState<SignupType>({
        email: "",
        password: "",
        username: ""
    });

    return (
        <div className="flex flex-col justify-center h-screen ">
            <div className="flex justify-center">
                <div>
                <div className="px-10">
                    <div className="flex justify-center flex-col font-sans">
                        <div className="text-4xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-gray-500 pl-4 font-medium">
                            Already have an account? 
                            <Link className="underline text-gray-600" to={"/signin"}> Login</Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <AuthInput label="Username" placeholder="Enter your username    " onChange={(e) =>
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
                </div>
                </div>
            </div>
        </div>
    )
}