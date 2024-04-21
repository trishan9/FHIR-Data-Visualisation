"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader2, Lock, Mail, User } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AuthPageSvg from "@/assets/illustrations/AuthPageSvg";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post(`${BASE_URL}/auth/signup`, {
        name,
        email,
        password,
      });
      router.push("/auth/signin");
      toast.success("Account created successfully! Please login to continue.");
    } catch (error: any) {
      toast.error(error?.response?.data?.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[100vh] rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-full flex-wrap items-center justify-center">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="px-26 py-17.5 text-center">
            <Link href="/" className="text-3xl font-semibold text-black">
            FHIR Dashboard
            </Link>

            <p className="2xl:px-20">
              Create an account on FHIR Dashboard
            </p>

            <span className="mt-15 inline-block">
              <AuthPageSvg />
            </span>
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">Start for free</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign Up to FHIR Dashboard - Trishan
            </h2>

            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <User className="h-6 w-6 opacity-85" />
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <Mail className="h-5 w-5 opacity-85" />
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <Lock className="h-5 w-5 opacity-85" />
                  </span>
                </div>
              </div>

              <button
                className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                type="submit"
              >
                Create Account
                {isLoading && <Loader2 className="ml-3 animate-spin" />}
              </button>

              <div className="mt-6 text-center">
                <p>
                  Already have an account?{" "}
                  <Link href="/auth/signin" className="text-primary">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
