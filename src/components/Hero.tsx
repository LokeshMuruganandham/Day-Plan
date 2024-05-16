import React from 'react';

const Hero: React.FC = () =>{

    return(
        <div className='hero'>
            <div className="bg-gradient-to-br from-gray-900 to-purple-900 overflow-hidden ">
                <div className="h-full md:flex items-center  max-w-screen-xl m-auto md:space-x-16 space-y-8 py-16 px-10">
                    <div className="md:w-7/12 text-white">
                        <h3 className="font-bold text-4xl md:text-5xl heading">Boost your productivity.</h3>
                        <h3 className="font-bold text-4xl md:text-5xl heading">Start using our app today.</h3>
                        <p className="py-8 md:py-16 text-gray-300 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a quae, quaerat saepe optio, consequatur ut similique ea ipsa consequuntur laborum impedit ex</p>
                        <div className="flex items-center">
                           <a href="" className="inline inline-block px-5 py-2.5 rounded text-black bg-white hover:bg-black hover:text-white">Get Started</a>
                            <div className="flex items-center space-x-2">
                                <a href="" className="ml-10 hover:underline">Learn more</a>
                                <img src="/Icons/arrow-sm-right-svgrepo-com copy.svg" alt="" className="w-5 self-end"/>
                            </div>
                        </div>                            
                    </div>
                    <div className="m-0 md:w-5/12">
                        <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" className="rounded-xl md:max-w-screen-lg"/>
                    </div> 
                </div>
            </div>
        </div>
    );

};

export default Hero;










