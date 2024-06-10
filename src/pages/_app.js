// _app.js

import { AuthProvider } from "../context/AuthContext";
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
