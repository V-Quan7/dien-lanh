import React from 'react'
export default function loginpage() {
    const Login = () => {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                    <form className="mt-6">
                        <div>
                            <label className="block text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account? <a href="/register" className="text-blue-500">Sign up</a>
                    </p>
                </div>
            </div>
        );
    };

}
