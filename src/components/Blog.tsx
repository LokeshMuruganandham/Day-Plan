import React from 'react';

const Blog: React.FC = () =>{
    return(
    <div className=" ">
        <div className="max-w-screen-xl py-10 md:py-16 px-5 md:space-y-10 m-auto">
            <div className="space-y-4 md:text-center">
                <h3 className="font-bold text-3xl heading">From the Blog</h3>
                <p className="text-lg text-gray-600">Learn how to grow your business from our expert advise</p>
            </div>
            <div className="flex justify-evenly flex-wrap ">
                <div className="flex justify-between flex-col max-w-xs lg:max-w-sm rounded-xl mt-10 mr-2 border lg:border-0 ">
                    <div>
                        <img src="/Images/image-1.jpg" alt="" className="rounded-t-xl lg:rounded-xl"/>
                    <div className="p-5 space-y-4">
                        <div className="flex text-xs items-center space-x-3">
                            <p className="text-gray-500">Mar 6, 2020</p>
                            <p className="p-2 bg-gray-50 rounded-full">Marketing</p>
                        </div>
                        <p className="text-xl font-bold heading">Boost your conversion rate</p>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero illo.</p>
                    </div>
                    </div>
                    <div className=" p-5 flex items-center space-x-4">
                        <div>
                            <img src="/Images/fueint_logo.png" alt="" className="w-10"/>
                        </div>
                        <div>
                            <p className="font-medium">Foster</p>
                            <p className="text-gray-600">Co-Founder</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-col max-w-xs lg:max-w-sm rounded-xl mt-10 mr-2 border lg:border-0 ">
                    <div>
                        <img src="/Images/image-1.jpg" alt="" className="rounded-t-xl lg:rounded-xl"/>
                        <div className="p-5 space-y-4">
                            <div className="flex text-xs items-center space-x-3">
                                <p className="text-gray-500">Mar 10, 2020</p>
                                <p className="p-2 bg-gray-50 rounded-full">Sales</p>
                            </div>
                            <p className="text-xl font-bold heading">How to use Search Engine Optimisation</p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero illo.</p>
                        </div>
                    </div>
                    <div className="p-5 flex items-center space-x-4">
                        <div>
                            <img src="/Images/fueint_logo.png" alt="" className="w-10"/>
                        </div>
                        <div>
                            <p className="font-medium">Tom</p>
                            <p className="text-gray-600">Director</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-col max-w-xs lg:max-w-sm rounded-xl mt-10 mr-2 border lg:border-0 ">
                    <div>
                        <img src="/Images/image-1.jpg" alt="" className="rounded-t-xl lg:rounded-xl "/>
                        <div className="p-5 space-y-4">
                            <div className="flex text-xs items-center space-x-3">
                                <p className="text-gray-500">Feb 12, 2020</p>
                                <p className="p-2 bg-gray-50 rounded-full">Business</p>
                            </div>
                            <p className="text-xl font-bold heading">Improve your customer experience</p>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero illo.</p>
                        </div>
                    </div>
                    <div className="p-5 flex items-center space-x-4">
                        <div>
                            <img src="/Images/fueint_logo.png" alt="" className="w-10"/>
                        </div>
                        <div>
                            <p className="font-medium">Michael</p>
                            <p className="text-gray-600">Frontend Developer</p>
                        </div>
                    </div>
                </div>        
            </div>  
        </div>
    </div>

    );
};
export default Blog;