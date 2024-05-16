import React from 'react';

const Stats: React.FC = () =>{
    return(
    <div>
        <div className="md:flex py-10 md:py-16">
            <div className="md:w-1/2 md:max-h-screen">
                <img src="/Images/Stats-Image.avif" alt="" className="hidden md:block md:max-h-full md:min-w-full md:object-cover " />
            </div>
            <div className="md:w-1/2  max-w-screen-md px-10 flex flex-col justify-center">
                <p className="text-indigo-700 font-medium heading">Our Track Record</p>
                <h3 className="text-3xl font-bold py-5 heading">Trusted by thousands of creaters worldwide</h3>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus modi nihil magni accusantium delectus id praesentium qui perspiciatis. Quas libero accusantium, eum tempore omnis odit blanditiis! Cupiditate, atque a?</p>
                
                <div className="grid grid-cols-2 gap-6 py-10 md:py-16">
                    <div className="px-5 border-l-2 space-y-2">
                        <p className="text-xl sm:text-3xl font-bold heading">+8000</p>
                        <p>Creators on the platform</p>
                    </div>
                    <div className="px-5 border-l-2 space-y-2">
                        <p className="text-xl sm:text-3xl font-bold heading">3%</p>
                        <p>FLat platform fee</p>
                    </div>
                    <div className="px-5 border-l-2 space-y-2">
                        <p className="text-xl sm:text-3xl font-bold heading">99.9%</p>
                        <p>Uptime guarantee</p>
                    </div>
                    <div className="px-5 border-l-2 space-y-2">
                        <p className="text-xl sm:text-3xl font-bold heading">$70M</p>
                        <p>Paid out to creators</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );

};

export default Stats;