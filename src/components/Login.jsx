import React, { useState } from "react";
import { X } from "lucide-react";

const Login = ({ setShowLogin, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    // Simulate login success
    const loggedInUser = { name: "you", role: "owner" };
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
    setMessage(`Welcome back, ${loggedInUser.name}!`);
    setTimeout(() => setShowLogin(false), 800); // Close after short delay
  };

  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-80 sm:w-96 p-6 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-lg border border-white/30 animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-3 right-3 text-gray-300 hover:text-red-400 transition"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white text-center mb-5 drop-shadow-md">
          Login to Your Account 
        </h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 bg-white/70 rounded-lg w-full p-2 mb-4 outline-none focus:ring-2 focus:ring-indigo-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 bg-white/70 rounded-lg w-full p-2 mb-5 outline-none focus:ring-2 focus:ring-indigo-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Message */}
        {message && (
          <p className="text-green-300 text-center text-sm mb-3">{message}</p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-indigo-500 hover:bg-indigo-600 text-white w-full py-2 rounded-lg transition-all shadow-lg"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-200 text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-yellow-300 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
