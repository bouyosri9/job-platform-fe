// src/app.js

import React from "react";
import Navbar from "./components/Navbar";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
