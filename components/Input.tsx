import React from "react";

interface InputProps {
    id: string;
    onChange: any;
    type?: string;
    value: string;
    label: string;
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    type,
    value,
    label
}) => {
    return ( 
        <div className="relative">
            <input 
            onChange={onChange}
            id={id}
            type={type}
            value={value}
            className="
            block
            rounded-md
            px-6
            pt-6
            pb-1
            w-full
            text-white
            bg-neutral-700
            text-base
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
            "
            placeholder=" "
            />
            <label
            className="
            absolute text-base text-zinc-400 duration-150 transform top-4 left-6 z-10 scale-75 -translate-y-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3
            "
            
            htmlFor={id}>
                {label}
            </label>
        
        
        </div>
     );
}
 
export default Input;