// src/components/Navbar.js

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* Add more navigation links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
