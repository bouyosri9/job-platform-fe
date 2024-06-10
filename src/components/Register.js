// src/pages/index.js

import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

import React from "react";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register`,
        formData
      );

      if (response.status === 200) {
        toast.success("Registration successful"); // Display success toast
        // Redirect to login page
        // router.push("/login");
      } else {
        console.error("Registration failed:", response.data);
        toast.error("Registration failed"); // Display error toast
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Error during registration"); // Display error toast
    }
  };
  return (
    <>
      <div>
        <div className="relative mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            placeholder="Name"
            className="bg-white peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
          >
            Name
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            className="bg-white peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
          >
            Email
          </label>
        </div>
        <div className="relative mb-6">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            className="bg-white peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="Password"
          />
          <label
            htmlFor="password"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
          >
            Password
          </label>
        </div>
        <button
          className="mb-3 flex w-full items-center justify-center rounded bg-blue-700 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 "
          data-twe-ripple-init=""
          data-twe-ripple-color="light"
          onClick={() => handleSubmit()}
        >
          Sign in
        </button>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            OR
          </p>
        </div>
        <a
          className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          style={{ backgroundColor: "#3b5998" }}
          href="#!"
          role="button"
          data-twe-ripple-init=""
          data-twe-ripple-color="light"
        >
          <span className="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </span>
          Continue with Facebook
        </a>
        <a
          className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          style={{ backgroundColor: "#55acee" }}
          href="#!"
          role="button"
          data-twe-ripple-init=""
          data-twe-ripple-color="light"
        >
          <span className="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </span>
          Continue with X
        </a>
      </div>
    </>
  );
};

export default Register;
