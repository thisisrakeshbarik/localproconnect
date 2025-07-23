import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebaseConfig'; // Import the initialized Firebase app

// Get the Auth instance from the initialized Firebase app
const auth = getAuth(firebaseApp);

// AuthForm component for user registration and login
function AuthForm() {
  // State to manage email input
  const [email, setEmail] = useState('');
  // State to manage password input
  const [password, setPassword] = useState('');
  // State to manage if the user is in login mode or signup mode
  const [isLoginMode, setIsLoginMode] = useState(true);
  // State to store authentication error messages
  const [authError, setAuthError] = useState(null);
  // State to manage loading status during authentication
  const [loading, setLoading] = useState(false);
  // State to store success messages
  const [successMessage, setSuccessMessage] = useState(null);

  // Function to handle form submission (login or signup)
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setAuthError(null); // Clear previous errors
    setSuccessMessage(null); // Clear previous success messages
    setLoading(true); // Set loading state to true

    try {
      if (isLoginMode) {
        // Log in user with email and password
        await signInWithEmailAndPassword(auth, email, password);
        setSuccessMessage('Logged in successfully!');
        console.log('User logged in:', auth.currentUser);
        // In a real app, you would redirect the user or update global state here
      } else {
        // Create a new user with email and password
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccessMessage('Account created successfully! You can now log in.');
        console.log('User signed up:', auth.currentUser);
        // After signup, you might want to automatically log them in or switch to login mode
        setIsLoginMode(true); // Switch to login mode after successful signup
      }
    } catch (error) {
      // Handle authentication errors
      console.error('Authentication error:', error.code, error.message);
      switch (error.code) {
        case 'auth/email-already-in-use':
          setAuthError('This email is already in use.');
          break;
        case 'auth/invalid-email':
          setAuthError('Invalid email address format.');
          break;
        case 'auth/weak-password':
          setAuthError('Password should be at least 6 characters.');
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          setAuthError('Invalid email or password.');
          break;
        case 'auth/too-many-requests':
          setAuthError('Too many failed login attempts. Please try again later.');
          break;
        default:
          setAuthError('Authentication failed. Please try again.');
      }
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-auto my-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        {isLoginMode ? 'Login to Your Account' : 'Create Your Account'}
      </h2>

      {/* Display authentication error messages */}
      {authError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
          <span className="block sm:inline">{authError}</span>
        </div>
      )}

      {/* Display success messages */}
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading} // Disable button when loading
        >
          {loading ? (isLoginMode ? 'Logging In...' : 'Signing Up...') : (isLoginMode ? 'Login' : 'Sign Up')}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            type="button"
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="text-blue-600 hover:text-blue-800 font-medium bg-transparent border-none p-0 focus:outline-none focus:ring-0"
          >
            {isLoginMode ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
