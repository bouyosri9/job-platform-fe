// src/components/Layout.js

import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Common layout elements such as header, navigation, etc. */}
      <header>
        <h1>My Website</h1>
      </header>

      {/* Render the page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;
