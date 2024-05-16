import React from 'react';

const FAQ: React.FC = () =>{
    return(
    <div className="flex justify-center items-center">
        <div className="py-10 md:py-16 px-10 max-w-screen-xl flex flex-col justify-center items-center">
            <div className="space-y-4 md:text-center max-w-screen-md flex flex-col justify-center md:items-center">
                <h3 className="font-bold text-2xl heading">Frequently asked questions</h3>
                <p className="text-lg text-gray-500">Have a question and can&apos;t find the answer you&apos;re looking for? reach out to our support team by sending us an email and we&apos;ll get back to you as soon as we can.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 pt-20">
                <div>
                    <p className="font-bold">What&apos;s the best thing about Switzerland ?</p>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt distinctio modi repudiandae aperiam cupiditate asperiores, enim voluptates sapiente officiis.</p>
                </div>
                <div>
                    <p className="font-bold">Why don&apos;t elephans hide behind the tree</p>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt distinctio modi repudiandae aperiam cupiditate asperiores, enim voluptates sapiente officiis.</p>
                </div>
                <div>
                    <p className="font-bold">What is holy water ?</p>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt distinctio modi repudiandae aperiam cupiditate asperiores, enim voluptates sapiente officiis.</p>
                </div>
                <div>
                    <p className="font-bold">Why does the man turned down the job offer? </p>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt distinctio modi repudiandae aperiam cupiditate asperiores, enim voluptates sapiente officiis.</p>
                </div>
                <div>
                    <p className="font-bold">What to call someone with no body and no nose?</p>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt distinctio modi repudiandae aperiam cupiditate asperiores, enim voluptates sapiente officiis.</p>
                </div>
                <div>
                    <p className="font-bold">What&apos;s the best thing about Switzerland ?</p>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt distinctio modi repudiandae aperiam cupiditate asperiores, enim voluptates sapiente officiis.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FAQ;