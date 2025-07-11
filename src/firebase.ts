import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANzrXQvPHWtnid4R0i1aGeVAQbNZ70-aI",
  authDomain: "portfolio-70bf2.firebaseapp.com",
  projectId: "portfolio-70bf2",
  storageBucket: "portfolio-70bf2.appspot.com", // fixed
  messagingSenderId: "320031244356",
  appId: "1:320031244356:web:dad72b196e130bf8697c11",
  measurementId: "G-SDQKJR8H4Y"
};

const app = initializeApp(firebaseConfig);

// Analytics only works on production domains, not localhost
let analytics;
if (typeof window !== "undefined" && window.location.hostname !== "localhost") {
  analytics = getAnalytics(app);
}

export { app, analytics }; 