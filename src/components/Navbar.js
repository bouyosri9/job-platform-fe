import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const Navbar = ({ token }) => {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(true); // Add loading state
  const router = useRouter();

  useEffect(() => {
    if (token !== null) {
      setLoading(false); // Update loading state once token is set
    }
  }, [token]);

  const handleLogout = () => {
    logout(); // Call logout function
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-white font-bold text-xl cursor-pointer">
              Your Logo
            </span>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/admin/dashboard">
              <span className="text-white hover:text-gray-300 cursor-pointer">
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/job-posting">
              <span className="text-white hover:text-gray-300 cursor-pointer">
                Job Postings
              </span>
            </Link>
          </li>
          {loading ? (
            <li>Loading...</li>
          ) : token ? (
            <li>
              <button
                onClick={handleLogout} // Use handleLogout function
                className="text-white hover:text-gray-300 cursor-pointer"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link href="/login">
                <span className="text-white hover:text-gray-300 cursor-pointer">
                  Login
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
