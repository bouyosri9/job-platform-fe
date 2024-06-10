// _app.js

import Navbar from "@/components/Navbar";
import { AuthProvider, useAuth } from "../context/AuthContext"; // Import useAuth hook
import "../globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default MyApp;
