import React from 'react';

const Nav: React.FC = () => {

    return(
    <nav>
        <div className="relative">
            <div className="hidden md:block navbar md:flex md:justify-between md:px-10 md:items-center md:max-w-screen-xl m-auto">
                <div>
                    <ul className="flex items-center">
                    <img className="w-12" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" />
                        <li className="flex items-center justify-around ml-6 mr-4 parent" >
                            <a href=""  className="flex py-8 pointer-events-none">Solutions
                                <svg className="w-2.5 h-2.5 ms-2.5 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
                                </svg>
                            </a>   
                            <div  className="z-20 dropdown hidden absolute top-20 left-0 ">
                                <div className="p-5 bg-white border-t"> 
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                                        <div className="p-5 rounded-lg hover:bg-gray-100">
                                            <img src="/Icons/Graph.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                            <div className="my-2.5">
                                                <p className="mt-5 text-lg font-medium">Analytics</p>
                                                <p className="text-gray-500">Get a better Understanding where your Traffic comes from.</p>
                                            </div>
                                            <div className="flex items-center ">
                                                <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg hover:bg-gray-100">
                                            <img src="/Icons/mouse-click-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                            <div className="my-2.5">
                                               <p className="mt-5 text-lg font-medium">Engagements</p>
                                               <p className="text-gray-500">Speak directly to your cusomers in a more meaningful way.</p> 
                                            </div>
                                            <div className="flex items-center ">
                                                <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg hover:bg-gray-100">
                                            <img src="/Icons/security-protection-shield-done-tick-check-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                            <div className="my-2.5">
                                                <p className="mt-5 text-lg font-medium">Security</p>
                                                <p className="text-gray-500">Your customers data will be safe and secure.</p>
                                            </div>
                                            <div className="flex items-center ">
                                                <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg hover:bg-gray-100">
                                            <img src="/Icons/view-boxes-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                            <div className="my-2.5">
                                                <p className="mt-5 text-lg font-medium">Integrations</p>
                                                <p className="text-gray-500">Connect with third party apps the you&apos;re already using.</p>
                                            </div>
                                            <div className="flex items-center ">
                                                <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100">
                                    <div className="flex py-3 justify-around max-w-screen-sm ">
                                        <div className="flex">
                                            <img src="/Icons/video-file-2-svgrepo-com.svg" alt="" className="w-4 fill-black" />
                                            <p className="pl-2 ">Watch Demo</p>
                                        </div>
                                        <div className="flex">
                                            <img src="/Icons/tick-circle-svgrepo-com.svg" alt="" className="w-4 fill-black"/>
                                            <p className="pl-2">View All Products</p>
                                        </div>
                                        <div className="flex">
                                            <img src="/Icons/phone-svgrepo-com.svg" alt="" className="w-4"/>
                                            <p className="pl-2">Contact Sales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mx-6 py-8"><a href="">Pricing</a></li>
                        <li className="mx-6 py-8"><a href="">Docs</a></li>
                        <li className="flex items-center justify-around ml-6 mr-4 parent py-8"><a href="" className="pointer-events-none">More</a>
                            <svg className="w-2.5 h-2.5 ms-2.5 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
                            </svg>
                            <div  className="z-20 dropdown hidden absolute top-20 left-0 ">
                                <div className="p-5 bg-white border-t"> 
                                    <div className="grid grid-cols-4 gap-10">
                                        <div className="p-5 rounded-lg hover:bg-gray-100">
                                            <img src="/Icons/Graph.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                            <div className="my-2.5">
                                                <p className="mt-5 text-lg font-medium">Analytics</p>
                                                <p className="text-gray-500">Get a better Understanding where your Traffic comes from.</p>
                                            </div>
                                            <div className="flex items-center ">
                                                <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg hover:bg-gray-100">
                                            <img src="/Icons/mouse-click-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                            <div className="my-2.5">
                                               <p className="mt-5 text-lg font-medium">Engagements</p>
                                               <p className="text-gray-500">Speak directly to your cusomers in a more meaningful way.</p> 
                                            </div>
                                            <div className="flex items-center ">
                                                <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg hover:bg-gray-100">
                                            <img src="/Icons/security-protection-shield-done-tick-check-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                            <div className="my-2.5">
                                                <p className="mt-5 text-lg font-medium">Security</p>
                                                <p className="text-gray-500">Your customers data will be safe and secure.</p>
                                            </div>
                                            <div className="flex items-center ">
                                                <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                            </div>
                                        </div>
                                        <div className="p-5 rounded-lg hover:bg-gray-100">
                                            <img src="/Icons/view-boxes-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                            <div className="my-2.5">
                                                <p className="mt-5 text-lg font-medium">Integrations</p>
                                                <p className="text-gray-500">Connect with third party apps the you&apos;re already using.</p>
                                            </div>
                                            <div className="flex items-center ">
                                                <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-100">
                                        <div className="flex py-3 justify-around max-w-screen-sm ">
                                            <div className="flex">
                                                <img src="/Icons/video-file-2-svgrepo-com.svg" alt="" className="w-4 fill-black" />
                                                <p className="pl-2 ">Watch Demo</p>
                                            </div>
                                            <div className="flex">
                                                <img src="/Icons/tick-circle-svgrepo-com.svg" alt="" className="w-4 fill-black"/>
                                                <p className="pl-2">View All Products</p>
                                            </div>
                                            <div className="flex">
                                                <img src="/Icons/phone-svgrepo-com.svg" alt="" className="w-4"/>
                                                <p className="pl-2">Contact Sales</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center space-x-4 py-5">
                        <li><a href="" className="inline inline-block px-5 py-2.5 rounded text-black  hover:bg-gray-100">Sign in</a></li>
                        <li><a href="" className="inline inline-block px-5 py-2.5 rounded text-white bg-blue-700 hover:bg-blue-500">Sign up</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="block md:hidden relative flex max-w-screen-md px-10 py-5 justify-between w-full">
            <img className="w-12" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt=""/>
            <div>
                <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
                    <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/>
                    </svg>
                    <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                <div  className="z-20 dropdown hidden absolute top-20 left-0 w-full" id="myLinks">
                    <div className="px-10 py-5 bg-white border-t w-full"> 
                        <ul className="flex flex-col space-y-4 justify-around items-start w-full">
                            <li className="p-2 flex justify-between w-full border-b hover:bg-gray-200 rounded-lg cursor-pointer" >
                                Solutions
                                    <svg className="w-2.5 h-2.5 ms-2.5 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
                                    </svg>
                                <div  className="z-10 dropdown hidden absolute top-20 left-0 " id="Links">
                                    <div className="p-5 bg-white border-t"> 
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                                            <div className="p-5 rounded-lg hover:bg-gray-100">
                                                <img src="/Icons/Graph.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                                <div className="my-2.5">
                                                    <p className="mt-5 text-lg font-medium">Analytics</p>
                                                    <p className="text-gray-500">Get a better Understanding where your Traffic comes from.</p>
                                                </div>
                                                <div className="flex items-center ">
                                                    <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                    <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                                </div>
                                            </div>
                                            <div className="p-5 rounded-lg hover:bg-gray-100">
                                                <img src="/Icons/mouse-click-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                                <div className="my-2.5">
                                                   <p className="mt-5 text-lg font-medium">Engagements</p>
                                                   <p className="text-gray-500">Speak directly to your cusomers in a more meaningful way.</p> 
                                                </div>
                                                <div className="flex items-center ">
                                                    <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                    <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                                </div>
                                            </div>
                                            <div className="p-5 rounded-lg hover:bg-gray-100">
                                                <img src="/Icons/security-protection-shield-done-tick-check-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                                <div className="my-2.5">
                                                    <p className="mt-5 text-lg font-medium">Security</p>
                                                    <p className="text-gray-500">Your customers data will be safe and secure.</p>
                                                </div>                                               
                                                <div className="flex items-center ">
                                                    <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                    <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                                </div>
                                            </div>
                                            <div className="p-5 rounded-lg hover:bg-gray-100">
                                                <img src="/Icons/view-boxes-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                                <div className="my-2.5">
                                                    <p className="mt-5 text-lg font-medium">Integrations</p>
                                                    <p className="text-gray-500">Connect with third party apps the you&apos;re already using.</p>
                                                </div>
                                                <div className="flex items-center ">
                                                    <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                    <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100">
                                        <div className="flex py-3 justify-around max-w-screen-sm ">
                                            <div className="flex">
                                                <img src="./Icons/video-file-2-svgrepo-com.svg" alt="" className="w-4 fill-black" />
                                                <p className="pl-2 ">Watch Demo</p>
                                            </div>
                                            <div className="flex">
                                                <img src="/Icons/tick-circle-svgrepo-com.svg" alt="" className="w-4 fill-black"/>
                                                <p className="pl-2">View All Products</p>
                                            </div>
                                            <div className="flex">
                                                <img src="/Icons/phone-svgrepo-com.svg" alt="" className="w-4"/>
                                                <p className="pl-2">Contact Sales</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="p-2 w-full border-b hover:bg-gray-200 rounded-lg"><a href="" className="pointer-events-none">Pricing</a></li>
                            <li className="p-2 w-full border-b hover:bg-gray-200 rounded-lg"><a href="" className="pointer-events-none">Docs</a></li>
                            <li className="p-2 flex justify-between w-full border-b hover:bg-gray-200 rounded-lg cursor-pointer" >
                                More
                                <svg className="w-2.5 h-2.5 ms-2.5 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path>
                                </svg>
                                <div  className="z-10 dropdown absolute hidden  top-60 left-0 " id="Link">
                                    <div className="p-5 bg-white border-t"> 
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                                            <div className="p-5 rounded-lg hover:bg-gray-100">
                                                <img src="/Icons/Graph.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                                <div className="my-2.5">
                                                    <p className="mt-5 text-lg font-medium">Analytics</p>
                                                    <p className="text-gray-500">Get a better Understanding where your Traffic comes from.</p>
                                                </div>
                                                <div className="flex items-center ">
                                                    <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                    <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                                </div>
                                            </div>
                                            <div className="p-5 rounded-lg hover:bg-gray-100">
                                                <img src="/Icons//mouse-click-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                                <div className="my-2.5">
                                                   <p className="mt-5 text-lg font-medium">Engagements</p>
                                                   <p className="text-gray-500">Speak directly to your cusomers in a more meaningful way.</p> 
                                                </div>                                                
                                                <div className="flex items-center ">
                                                    <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                    <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                                </div>
                                            </div>
                                            <div className="p-5 rounded-lg hover:bg-gray-100">
                                                <img src="/Icons/security-protection-shield-done-tick-check-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                                <div className="my-2.5">
                                                    <p className="mt-5 text-lg font-medium">Security</p>
                                                    <p className="text-gray-500">Your customers data will be safe and secure.</p>
                                                </div>                                               
                                                <div className="flex items-center ">
                                                    <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                    <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                                </div>
                                            </div>
                                            <div className="p-5 rounded-lg hover:bg-gray-100">
                                                <img src="/Icons/view-boxes-svgrepo-com.svg" alt="" className="w-10 bg-blue-700 rounded p-2"/>
                                                <div className="my-2.5">
                                                    <p className="mt-5 text-lg font-medium">Integrations</p>
                                                    <p className="text-gray-500">Connect with third party apps the you&apos;re already using.</p>
                                                </div>
                                                <div className="flex items-center ">
                                                    <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                                                    <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100">
                                        <div className="flex py-3 justify-around max-w-screen-sm ">
                                            <div className="flex">
                                                <img src="/Icons/video-file-2-svgrepo-com.svg" alt="" className="w-4 fill-black" />
                                                <p className="pl-2 ">Watch Demo</p>
                                            </div>
                                            <div className="flex">
                                                <img src="/Icons/tick-circle-svgrepo-com.svg" alt="" className="w-4 fill-black"/>
                                                <p className="pl-2">View All Products</p>
                                            </div>
                                            <div className="flex">
                                                <img src="/Icons/phone-svgrepo-com.svg" alt="" className="w-4"/>
                                                <p className="pl-2">Contact Sales</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
    </nav>
    
);

};
export default Nav;

