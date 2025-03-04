import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Ambil data pengguna dari API atau database
            const response = await axios.get('http://localhost:5000/users');
            const user = response.data.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {
                alert(`Welcome, ${user.name}!`);
                // Menyimpan status login ke localStorage
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/'); // Redirect ke halaman home setelah login
            } else {
                alert('Invalid email or password!');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="flex flex-col h-screen w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto my-20 px-20 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
            <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
                <div>
                    <img src="src\assets\savior-icon.png" alt="Logo" width="100" />
                </div>
                <h1 className="text-3xl font-bold text-[#4B5563] my-auto">SAVIOR</h1>
            </div>
            <div className="text-sm font-light text-[#6B7280] pb-8 mx-auto">Login ke Savior</div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="pb-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#111827]">Email</label>
                    <div className="relative text-gray-400">
                        <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg"
                            placeholder="name@company.com"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                <div className="pb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#111827]">Password</label>
                    <div className="relative text-gray-400">
                        <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-asterisk">
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M12 8v8" />
                                <path d="m8.5 14 7-4" />
                                <path d="m8.5 10 7 4" />
                            </svg>
                        </span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg"
                            placeholder="••••••••••"
                            autoComplete="new-password"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-full text-[#FFFFFF] bg-[#0acf34] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
                    Login
                </button>
            </form>
            <div className="text-sm font-light text-[#6B7280] text-center">
                Don't have an account? <a href="/register" className="font-medium text-[#0acf34] hover:underline">Register</a>
            </div>
        </div>
    );
};

export default Login;
