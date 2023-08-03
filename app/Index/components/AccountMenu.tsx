'use client';
import React from "react";
// import getCurrentUser from "@/app/actions/getCurrentUser";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
    visible?: boolean
    name?: string
}

const AccountMenu:React.FC<AccountMenuProps> =  ({
    visible,
    name
}) => {
    
    // const currentUser  = await getCurrentUser();
    if(!visible){
        return null;
    }
    return ( 
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img className=" w-8 rounded-md" src="/images/default-blue.png" alt="" />
                    <p className="text-sm text-white group-hover/item:underline">{ name }</p>
                </div>

            </div>
            <hr className="border-0 h-px my-4 bg-gray-600" />
            <div onClick={() => {signOut()}} className="px-3 text-center text-white text-sm hover:underline">Sign out Netflix</div>
        </div>
     );
}
 
export default AccountMenu;