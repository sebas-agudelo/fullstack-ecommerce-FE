import { useEffect } from "react";

export const FormInput = ({ label, name, value, onChange, error, type = "text", width = ""}) => {
    useEffect(() => {

    },[])
    return (
        <div className={`${width && width} flex flex-col mb-8`}>
            <label className="text-[13px] mb-1 font-bold">{label}</label>
            <input
            placeholder={label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full border border-[1px] rounded-md p-3 focus:outline ${error ? "border-red-600 focus:outline-red-600" : "border-gray-400 focus:outline-purple-800 lg:hover:border-gray-950 lg:hover:shadow-sm"}`}
            />
            {error && <p className="text-[14px] mt-1 text-red-600">{error}</p>}
        </div>
    );
};
