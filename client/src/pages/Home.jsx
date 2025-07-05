import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Home = () => {
  const { userData, isLoggedin } = useContext(AppContext);
  const navigate = useNavigate();

  // Logged In User View
  if (isLoggedin && userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navbar />
        
        {/* Verification Banner */}
        {!userData.isAccountVerified ? (
          <div className="w-full max-w-2xl mx-auto mb-6">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl">⚠️</span>
                <h3 className="text-lg font-semibold text-yellow-800">
                  Email Verification Required
                </h3>
              </div>
              <p className="text-yellow-700 mb-3">
                Please verify your email address to access all features and ensure account security.
              </p>
              <button 
                onClick={() => navigate("/email-verify")}
                className="bg-yellow-600 text-white px-6 py-2 rounded-full font-medium hover:bg-yellow-700 transition-colors"
              >
                Verify Email Now
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-2xl mx-auto mb-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl">✅</span>
                <h3 className="text-lg font-semibold text-green-800">
                  Email Verified Successfully!
                </h3>
              </div>
              <p className="text-green-700">
                Your email address has been verified. Your account is now fully secure and activated.
              </p>
            </div>
          </div>
        )}

        {/* Welcome Section */}
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img
                src={assets.header_img}
                alt="profile"
                className="w-20 h-20 rounded-full border-4 border-blue-200"
              />
            </div>
            
            <h1 className="flex items-center justify-center gap-3 text-3xl font-bold text-gray-800 mb-4">
              Welcome back, {userData.name}!
              <img
                className="w-8 h-8 animate-bounce"
                src={assets.hand_wave}
                alt="wave"
              />
            </h1>
            
            <p className="text-gray-600 mb-8 text-lg">
              Great to see you again! Your account is ready to go.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={`rounded-xl p-6 text-center border-2 ${
                userData.isAccountVerified 
                  ? "bg-green-50 border-green-200" 
                  : "bg-yellow-50 border-yellow-200"
              }`}>
                <div className="text-3xl mb-3">
                  {userData.isAccountVerified ? "✅" : "⚠️"}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Email Verification
                </h3>
                <p className={`text-sm font-medium ${
                  userData.isAccountVerified 
                    ? "text-green-600" 
                    : "text-yellow-600"
                }`}>
                  {userData.isAccountVerified 
                    ? "Your email is verified and secure!" 
                    : "Your email needs verification"
                  }
                </p>
                {!userData.isAccountVerified && (
                  <p className="text-xs text-gray-500 mt-2">
                    Check your email for verification link
                  </p>
                )}
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  🎉
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Account Status
                </h3>
                <p className="text-sm text-gray-600">
                  Your account is active and secure
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!userData.isAccountVerified && (
                <button 
                  onClick={() => navigate("/email-verify")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  Verify Email
                </button>
              )}
              <button 
                onClick={() => navigate("/reset-password")}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Non-Logged In User View
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <img
              src={assets.logo}
              alt="logo"
              className="w-32 h-32 mx-auto mb-8"
            />
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Welcome to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}Auth App
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Secure authentication system with email verification, password reset, and modern UI design.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Secure Login
              </h3>
              <p className="text-gray-600">
                JWT-based authentication with secure cookie storage
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Email Verification
              </h3>
              <p className="text-gray-600">
                OTP-based email verification for enhanced security
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Password Reset
              </h3>
              <p className="text-gray-600">
                Secure password reset with email OTP verification
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of users who trust our secure authentication system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Now
              </button>
              
              <button 
                onClick={() => navigate("/login")}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
