import { ChangeEvent } from "react";

interface AuthInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export const AuthInput = ({label, placeholder, onChange, type}: AuthInputType) => {
    return <div className="grid gap-6 mb-6">
        <div>
            <label className="block mb-2 text-sm font-semibold text-black">{label}</label>
            <input type={type || "text"} onChange={onChange} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}