// pages/register.js

import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import Login from "@/components/LoginComponent";
import Register from "@/components/Register";
import LoginComponent from "@/components/LoginComponent";

const RegisterPage = () => {
  

  return (
    <section className="h-screen flex justify-center">
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            {/* <Register/> */}
            <LoginComponent></LoginComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
