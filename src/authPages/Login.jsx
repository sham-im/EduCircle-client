import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-600">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form className="mt-6">
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </div>
          </div>
        </form>

        {/* Toggle Between Login & Register */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
          </button>
        </div>

        {/* Google Login Button */}
        <div className="mt-6 flex items-center justify-center space-x-2">
          <button
            className="flex items-center bg-red-500 text-white py-3 px-4 rounded-md w-full hover:bg-red-600"
            aria-label="Login with Google"
          >
            <FaGoogle className="mr-2 text-xl" />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
