"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleLogin = () => {
        setIsAnimating(true);
        // Simulate API call
        setTimeout(() => setIsAnimating(false), 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full overflow-hidden text-white' text-white">
            <div className="max-w-lg w-full space-y-8 p-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200">
                <div className="text-center">
                    <h2 className="mt-6 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Welcome Back!</h2>
                    <p className="mt-2 text-lg text-gray-300">Sign in to continue to your account</p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px flex flex-col">
                        <div className='mb-10'>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-full relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-lg" placeholder="Email address" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-full relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-lg" placeholder="Password" />
                        </div>
                    </div>

                    <div>
                        <button type="button"  className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${isAnimating ? 'animate-bounce' : ''}`}>
                            <Link href="/authority/authority" onLoad={Link}>Sign in</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
