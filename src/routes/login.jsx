import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { AlertCircle, ArrowLeft, Check } from "lucide-react";

const SignUpForm = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    displayName: "",
    username: "",
    password: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    agreesToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white text-center">
            Create an account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white px-3 py-2 text-sm sm:text-base"
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="displayName"
              className="block text-sm font-medium text-gray-300"
            >
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white px-3 py-2 text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white px-3 py-2 text-sm sm:text-base"
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white px-3 py-2 text-sm sm:text-base"
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <select
                aria-label="Month"
                className="rounded-md bg-gray-700 border-gray-600 text-white px-2 py-2 sm:px-3 text-sm sm:text-base"
                required
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {new Date(2000, i).toLocaleString("default", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>
              <select
                aria-label="Day"
                className="rounded-md bg-gray-700 border-gray-600 text-white px-2 py-2 sm:px-3 text-sm sm:text-base"
                required
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                aria-label="Year"
                className="rounded-md bg-gray-700 border-gray-600 text-white px-2 py-2 sm:px-3 text-sm sm:text-base"
                required
              >
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={new Date().getFullYear() - i}>
                    {new Date().getFullYear() - i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-start sm:items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 sm:mt-0 rounded bg-gray-700 border-gray-600 text-blue-600"
              aria-required="true"
            />
            <label htmlFor="terms" className="text-xs sm:text-sm text-gray-300">
              I have read and agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md px-4 py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
          >
            Continue
          </button>
        </form>

        <p className="text-center text-xs sm:text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white text-center">
            Welcome back!
          </h1>
          <p className="text-sm sm:text-base text-gray-400 text-center">
            We're so excited to see you again!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="emailOrPhone"
              className="block text-sm font-medium text-gray-300"
            >
              Email or Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="emailOrPhone"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white px-3 py-2 text-sm sm:text-base"
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="loginPassword"
              className="block text-sm font-medium text-gray-300"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="loginPassword"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white px-3 py-2 text-sm sm:text-base"
              aria-required="true"
            />
          </div>

          <button
            type="button"
            className="text-xs sm:text-sm text-blue-400 hover:underline"
          >
            Forgot your password?
          </button>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md px-4 py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-xs sm:text-sm text-gray-400">
          Need an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    //api
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-bold text-white">
              Check your email
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400">
              We have sent a password reset link to{" "}
              <span className="font-medium text-gray-300">{email}</span>
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="w-full bg-blue-600 text-white rounded-md px-4 py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Resend email
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full bg-gray-700 text-white rounded-md px-4 py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
            >
              Back to login
            </button>
          </div>

          <p className="mt-4 text-center text-xs sm:text-sm text-gray-400">
            Didn't receive the email? Check your spam folder or try another
            email address.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div>
          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to login
          </button>

          <div className="mt-6 space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Reset your password
            </h1>
            <p className="text-sm sm:text-base text-gray-400">
              Enter your email address and we'll send you instructions to reset
              your password.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white px-3 py-2 text-sm sm:text-base"
              placeholder="Enter your email address"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md px-4 py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
          >
            Send reset link
          </button>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
