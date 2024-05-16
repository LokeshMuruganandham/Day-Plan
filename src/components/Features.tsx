import React from 'react';

const Features: React.FC = () => {
    return(
    <div>
        <div className="py-10 md:py-16 px-10 max-w-screen-xl m-auto">
            <div className="pb-10">
                <div className="flex flex-col md:items-center justify-around">
                    <p className="py-2 text-indigo-700 font-medium heading">Deploy faster</p>
                    <h3 className="text-4xl font-bold heading">Everything you need to deploy your app</h3>
                    <p className="py-4 max-w-screen-sm md:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam iusto veniam laboriosam temporibus optio illo vitae sed officiis magni </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                <div className="flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                        <div className="flex font-medium space-x-2 ">
                            <img src="/Icons/cloud-upload-svgrepo-com.svg" alt="" srcSet="" className="w-5"/>
                            <p className="heading">Push to deploy</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nemo sed ex maxime libero autem repellat voluptates aperiam alias, aliquam beatae nostrum commodi?</p>
                    </div>
                    <div className="flex items-center">
                        <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                        <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end "/>
                    </div>
                </div>
                <div className="flex flex-col justify-between space-y-4 ">
                    <div className="space-y-4">
                        <div className="flex font-medium space-x-2">
                            <img src="/Icons/lock-svgrepo-com.svg" alt="" className="w-5 "/>
                            <p className="heading">SSL Certificates</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nemo sed ex maxime libero autem repellat voluptates aperiam alias.</p>
                    </div>
                    <div className="flex items-center">
                        <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                        <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                    </div>
                </div>
                <div className="flex flex-col justify-between space-y-4 ">
                    <div className="space-y-4">
                        <div className="flex font-medium space-x-2 ">
                            <img src="/Icons/loop-circular-svgrepo-com.svg" alt="" className="w-5"/>
                            <p className="heading">Simple Queues</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nemo sed ex maxime libero autem repellat voluptates aperiam alias, aliquam beatae nostrum commodi? Corrupti adipisci recusandae in amet, tenetur itaque.</p>
                    </div>
                    <div className="flex items-center">
                        <a href="" className="pr-1 text-indigo-700 hover:underline">Learn more</a>
                        <img src="/Icons/arrow-sm-right-svgrepo-com.svg" alt="" className="w-5 self-end"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Features;