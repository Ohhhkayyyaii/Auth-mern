import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const { backendUrl, getAuthState } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      axios.defaults.withCredentials = true;

      const res = await axios.post(backendUrl + "/api/auth/register", {
        name,
        email,
        password,
      });
      
      const data = res.data;

      if (data.success) {
        toast.success(data.message);
        await getAuthState();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer filter brightness-0 invert"
      />
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full sm:w-96 text-white border border-white/20">
        <h2 className="text-3xl font-semibold text-center mb-3">
          Create Account
        </h2>

        <p className="text-center text-sm mb-6 text-gray-300">
          Create your account
        </p>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <img src={assets.person_icon} alt="person_icon" className="w-5 h-5 filter brightness-0 invert" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="bg-transparent outline-none text-white placeholder-gray-300 w-full"
              type="text"
              placeholder="Full Name"
              required
              disabled={isLoading}
            />
          </div>
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <img src={assets.mail_icon} alt="mail_icon" className="w-5 h-5 filter brightness-0 invert" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent outline-none text-white placeholder-gray-300 w-full"
              type="email"
              placeholder="Email id"
              required
              disabled={isLoading}
            />
          </div>
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <img src={assets.lock_icon} alt="lock_icon" className="w-5 h-5 filter brightness-0 invert" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-transparent outline-none text-white placeholder-gray-300 w-full"
              type="password"
              placeholder="Password"
              required
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-gray-300 text-center text-xs mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-purple-300 cursor-pointer hover:text-purple-200 transition-colors font-medium"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup; 