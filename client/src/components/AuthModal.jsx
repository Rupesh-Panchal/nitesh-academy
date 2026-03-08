import { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Blur Background */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-base-100 w-[95%] max-w-md p-8 rounded-xl shadow-2xl z-10">

        {/* Close Button */}
        <button
          className="btn btn-sm btn-circle absolute right-4 top-4"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login to Your Account" : "Create an Account"}
        </h2>

        <div className="space-y-4">

          {/* Signup Extra Fields */}
          {!isLogin && (
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </div>
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary w-full">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p className="text-sm text-center mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              className="text-primary cursor-pointer ml-1 font-medium"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>

        </div>

      </div>
    </div>
  );
};

export default AuthModal;