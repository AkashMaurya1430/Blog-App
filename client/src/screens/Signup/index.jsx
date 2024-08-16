import React from "react";

const Input = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1 text-left"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-light-100 focus:border-light-100 ${className}`}
      />
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="flex items-center justify-center px-5 py-10 bg-light-50">
      <form className="max-w-md mx-auto mt-8 p-6 bg-light-0 rounded w-full gap-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-50">
          Join Us
        </h2>
        <Input
          label="Username"
          type="text"
          id="username"
          placeholder="Enter your username"
        />
        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="w-full bg-dark-75 text-white text-sm py-2 px-4 rounded hover:bg-dark-100 focus:outline-none focus:ring-2 focus:ring-dark-100 focus:ring-opacity-50"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
