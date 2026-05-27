import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <section className="w-full px-4 md:px-10 py-20 bg-white select-none">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">

                {/* Main Section Header */}
                <h2 className="text-[28px] md:text-[36px] font-bold text-black tracking-tight mb-3">
                    Get Exclusive Offers & Updates
                </h2>

                {/* Subtitle Description Text */}
                <p className="text-[14px] md:text-[15px] font-normal text-gray-400 max-w-md md:max-w-xl leading-relaxed mb-8">
                    Get recommendations, tips, updates, promotions and more.
                </p>

            
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-[520px] h-[56px] bg-[#F5F5F7] rounded-xl flex items-center justify-between px-2 relative transition-all focus-within:bg-[#EDEDF0]"
                >
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        
                        className="w-full h-full bg-transparent border-none outline-none text-[14px] text-black placeholder-gray-400 font-normal pl-5 pr-14"
                    />

                    {/* Circular Action Submit Button */}
                    <button
                        type="submit"
                        className="absolute right-2 top-2 w-10 h-10 bg-[#FFAE34] hover:bg-black text-white rounded-full flex items-center justify-center transition-colors duration-300"
                        aria-label="Submit subscription"
                    >
                        <ArrowRight size={18} className="stroke-[2.5]" />
                    </button>
                </form>

            </div>
        </section>
    );
}