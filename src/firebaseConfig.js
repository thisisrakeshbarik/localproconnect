// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
// You might not need getAnalytics if you disabled it, but it's fine to keep for now.
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// IMPORTANT: Replace these with your actual Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBFPVRaNnJSFAW0c4gRdH-UpwnZWQhN5mo", // REPLACE WITH YOUR KEY
  authDomain: "localpro-connect-76718.firebaseapp.com", // REPLACE WITH YOUR DOMAIN
  projectId: "localpro-connect-76718", // REPLACE WITH YOUR PROJECT ID
  storageBucket: "localpro-connect-76718.firebasestorage.app", // REPLACE WITH YOUR STORAGE BUCKET
  messagingSenderId: "281260702705", // REPLACE WITH YOUR SENDER ID
  appId: "1:281260702705:web:572606c45ebc4fe0d86250", // REPLACE WITH YOUR APP ID
  measurementId: "G-G5KPB370S2" // REPLACE WITH YOUR MEASUREMENT ID (optional)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// If you plan to use Analytics, uncomment the line below:
// const analytics = getAnalytics(app);

// Export the initialized app instance
export default app;
