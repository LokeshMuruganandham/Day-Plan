import React from 'react';

const Footer: React.FC = () =>{
    return(
    <div className="bg-gray-900 text-white ">
        <div className="py-10 md:py-16 px-10 max-w-screen-xl m-auto flex flex-col ">
            <div className="pb-10 grid grid-cols-2  md:grid-cols-4 gap-10 md:gap-36 content-end border-b border-gray-700">
                <div className="space-y-2">
                    <h4 className="font-bold heading">Solutions</h4>
                    <ul className="text-gray-400">
                        <li><a href="">Marketing</a></li>
                        <li><a href="">Analytics</a></li>
                        <li><a href="">Commerce</a></li>
                        <li><a href="">Insights</a></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold heading">Support</h4>
                    <ul className="text-gray-400">
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Guides</a></li>
                        <li><a href="">API Status</a></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold heading">Company</h4>
                    <ul className="text-gray-400">
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Press</a></li>
                        <li><a href="">Jobs</a></li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="font-bold heading">Legal</h4>
                    <ul className="text-gray-400">
                        <li><a href="">Claim</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="py-10 lg:flex justify-between border-b border-gray-700 space-y-4 lg:space-y-0">
                <div>
                    <h4 className="heading">Subscribe to our Newsletter</h4>
                    <p className="text-gray-500">The latest news, articles, and resourses, sent to your inbox weekly.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="max-w-screen-sm ">
                        <input className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-52 sm:w-56 md:w-72" placeholder="Email"/>
                    </div>
                    <div>
                        <a href="" className="inline inline-block px-2 md:px-5 py-2.5 rounded-lg text-black bg-blue-700 text-white">Subscribe</a>
                    </div>
                </div>                
            </div>
            <div className="py-10 flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between items-center ">
                <div className="flex items-center space-x-2">
                    <img src="/Icons/copyright-svgrepo-com.svg" alt="" className="w-6"/>
                    <p className="text-gray-500">2024 Your Company, Inc. All rights reserved. </p>
                </div>
                <div className="flex space-x-4">
                    <img src="/Icons/facebook-svgrepo-com.svg" alt="" className="w-6"/>
                    <img src="/Icons/instagram-svgrepo-com.svg" alt="" className="w-6"/>
                    <img src="/Icons/twitter-svgrepo-com.svg" alt="" className="w-6"/>
                    <img src="/Icons/github-142-svgrepo-com.svg" alt="" className="w-6"/>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Footer