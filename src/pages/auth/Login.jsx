import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
                {/* Login Form */}
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Sign In</h2>
                
                <form className="space-y-60">
                    {/* Username Input */}
                    <div>
                        <h3 className="text-gray-600 font-medium mb-1">User Name*</h3>
                        <div className="relative">
                            <span className="absolute left-30 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <i className="fas fa-user"></i>
                            </span>
                            <input
                                id="username"
                                type="text"
                                placeholder="User Name"
                                className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <h3 className="text-gray-600 font-medium mb-1">Password*</h3>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <i className="fas fa-lock"></i>
                            </span>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center justify-between text-gray-600 text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" /> Remember Me
                        </label>
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                        Sign In
                    </button>

                    {/* Register Link */}
                    <p className="text-center text-gray-600">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </form>
            </div>
    );
};

export default Login;
