import React, { useState } from 'react';

const Pricing: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const pricingCards = [
        {
            title: 'Freelancer',
            description: 'The essentials to provide your best work for clients.',
            price: '$15/month',
            features: [
                '5 Products',
                'Upto 1000 subscribers',
                'Basic Analysis',
                '48-hour Support response time'
            ]
        },
        {
            title: 'Startup',
            description: 'A plan that scales with your rapidly growing business',
            price: '$30/month',
            features: [
                '5 Products',
                'Upto 1000 subscribers',
                'Basic Analysis',
                '48-hour Support response time',
                '5 Products',
                'Upto 1000 subscribers'
            ]
        },
        {
            title: 'Enterprise',
            description: 'Dedicated support and infrastructure for your company',
            price: 'Custom',
            features: [
                '5 Products',
                'Upto 1000 subscribers',
                'Basic Analysis',
                '48-hour Support response time',
                '5 Products',
                'Upto 1000 subscribers',
                'Basic Analysis',
                '48-hour Support response time'
            ]
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pricingCards.length);
    };

    const previousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pricingCards.length) % pricingCards.length);
    };

    return (
    <div>
        <div className="hidden md:block py-10 md:py-16 px-5 max-w-screen-xl m-auto ">
            <div className="flex flex-col md:items-center md:justify-around">
                <p className="py-2 text-indigo-700 font-medium heading">Pricing</p>
                <h3 className="text-4xl font-bold heading">Pricing plans for teams of all sizes</h3>
                <p className="py-4 max-w-screen-sm md:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam iusto veniam laboriosam temporibus optio illo vitae sed officiis magni </p>
            </div>
            <div className="flex justify-evenly flex-wrap">
                <div className="w-full max-w-xs lg:max-w-sm min-h-96 border rounded-3xl mr-2 p-8 hover:bg-gray-50 mt-10  " >
                    <div className="space-y-6">
                        <p className="font-bold text-xl heading">Freelancer</p>
                        <p>The essentials to provide your best work for clients.</p>
                        <div className="flex items-end">
                            <p className="text-3xl font-bold">$15</p>
                            <p>/month</p>
                        </div>
                        <button type="button" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center hover:bg-blue-500">Buy plan</button>
                    </div>
                    <ul className="pt-6 space-y-2">
                        <li className="flex items-center">
                            <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                            <p>5 Products</p>
                        </li>
                        <li className="flex items-center">
                            <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                            <p>Upto 1000 subscribers</p>
                        </li>
                        <li className="flex items-center">
                            <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                            <p>Basic Analysis</p>
                        </li>
                        <li className="flex items-center">
                            <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                            <p>48-hour Support response time </p>
                        </li>
                    </ul>
                </div>
                <div className="w-full max-w-xs lg:max-w-sm min-h-96 border rounded-3xl mr-2 p-8 hover:bg-gray-50 mt-10 " >
                            <div className="space-y-6">
                                <p className="font-bold text-xl heading">Startup</p>
                                <p>A plan that scales with your rapidly growing business</p>
                                <div className="flex items-end">
                                    <p className="text-3xl font-bold">$30</p>
                                    <p>/month</p>
                                </div>
                                <button type="button" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center hover:bg-blue-500">Buy plan</button>
                            </div>
                            <ul className="pt-6 space-y-2">
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                                    <p>5 Products</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                                    <p>Upto 1000 subscribers</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                                    <p>Basic Analysis</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                                    <p>48-hour Support response time </p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                                    <p>5 Products</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6"/>
                                    <p>Upto 1000 subscribers</p>
                                </li>
                            </ul>
                </div>
                <div className="w-full max-w-xs lg:max-w-sm min-h-96 border rounded-3xl mr-2 p-8 bg-gray-900 text-gray-200 mt-10" >
                            <div className="space-y-6">
                                <p className="font-bold text-xl heading">Enterprise</p>
                                <p className="text-gray-400">Dedicated support and infrastructure for your company</p>
                                <div className="flex items-end">
                                    <p className="text-3xl font-bold">Custom</p>
                                </div>
                                <button type="button" className="text-white bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center hover:bg-gray-100 hover:text-gray-500">Contact Sales</button>
                            </div>
                            <ul className="pt-6 space-y-2 text-gray-400">
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-comcopy.svg" alt="" className="w-6"/>
                                    <p>5 Products</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-comcopy.svg" alt="" className="w-6"/>
                                    <p>Upto 1000 subscribers</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-comcopy.svg" alt="" className="w-6"/>
                                    <p>Basic Analysis</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-comcopy.svg" alt="" className="w-6"/>
                                    <p>48-hour Support response time </p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-comcopy.svg" alt="" className="w-6"/>
                                    <p>5 Products</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-comcopy.svg" alt="" className="w-6"/>
                                    <p>Upto 1000 subscribers</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-comcopy.svg" alt="" className="w-6"/>
                                    <p>Basic Analysis</p>
                                </li>
                                <li className="flex items-center">
                                    <img src="/Icons/tick-svgrepo-comcopy.svg" alt="" className="w-6"/>
                                    <p>48-hour Support response time </p>
                                </li>
                            </ul>
                </div>
            </div>
        </div>
        <div className="md:hidden py-10 md:py-16 px-6 max-w-screen-xl m-auto ">
            <div className="flex flex-col md:items-center px-4 md:justify-around mb-10">
                <p className="py-2 text-indigo-700 font-medium heading">Pricing</p>
                <h3 className="text-4xl font-bold heading">Pricing plans for teams of all sizes</h3>
                <p className="py-4 max-w-screen-sm md:text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam iusto veniam laboriosam temporibus optio illo vitae sed officiis magni
                </p>
            </div>
            <div className="flex items-center justify-around md:hidden" id="carousel">
                <div className="md:hidden z-50" id="prevBtn" onClick={previousSlide}>
                    <img src="/Icons/previous-svgrepo-com.svg" alt="" className="w-6" />
                </div>
                {pricingCards.map((card, index) => (
                    <div key={index} className={`w-full max-w-sm min-h-96 border rounded-3xl p-4 sm:p-8  mt-10 ${index === currentIndex ? '' : 'hidden'} ${index === 2 ? ' bg-gray-900 text-gray-200' : 'hover:bg-gray-50'}
                    `}>
                        <div className="space-y-6">
                            <p className="font-bold text-xl heading">{card.title}</p>
                            <p>{card.description}</p>
                            <div className="flex items-end">
                                <p className="text-3xl font-bold">{card.price}</p>
                            </div>
                            <button type="button" className={`text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center hover:bg-blue-500 ${index === 2 ? 'text-white bg-gray-700 hover:bg-gray-100 hover:text-gray-500' : ''}
                    `}>Buy plan</button>
                        </div>
                        <ul className="pt-6 space-y-2">
                            {card.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center">
                                    {index === 2 ? (
                                        <img src="/Icons/tick-svgrepo-comcopy.svg" alt="" className="w-6" />
                                    ) : (
                                        <img src="/Icons/tick-svgrepo-com.svg" alt="" className="w-6" />
                                    )}
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="md:hidden z-50" id="nextBtn" onClick={nextSlide}>
                    <img src="/Icons/next-svgrepo-com.svg" alt="" className="w-6" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Pricing;