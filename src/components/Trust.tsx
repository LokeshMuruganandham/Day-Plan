import React from "react";

const Trust: React.FC = () =>{
    return(
    <div className="">
        <div className=" max-w-screen-xl flex justify-around py-10 md:py-16 px-10 m-auto flex-wrap">
            <div className="md:w-1/2 space-y-6">
                <h3 className="font-bold text-3xl heading">Trusted by most innovative teams</h3>
                <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a quae, quaerat saepe optio, consequatur ut similique ea ipsa consequuntur laborum impedit ex</p>
                <div className="flex items-center">
                    <a href="" className="inline inline-block px-5 py-2.5 rounded text-black bg-blue-700 text-white hover:bg-blue-500">Create Account</a>
                    <div className="flex items-center space-x-2">
                        <a href="" className="ml-10 text-blue-700 hover:underline">Contact us</a>
                        <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                    </div>
                </div>
                
            </div>
            <div className="md:w-1/2 grid grid-cols-2 md:px-10 py-10 gap-10 md:gap-0">
                <img src="/Icons/laravel.svg" alt="" className="w-44"/>
                <img src="/Icons/laravel.svg" alt="" className="w-44"/>
                <img src="/Icons/laravel.svg" alt="" className="w-44"/>
                <img src="/Icons/laravel.svg" alt="" className="w-44"/>
                <img src="/Icons/laravel.svg" alt="" className="w-44"/>
                <img src="/Icons/laravel.svg" alt="" className="w-44"/>
            </div>
        </div>
    </div>
    );
};
export default Trust;