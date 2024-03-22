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
            <label className="block mb-2 text-base font-semibold text-black font-sans">{label}</label>
            <input type={type || "text"} onChange={onChange} className="w-full bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-lg block p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}