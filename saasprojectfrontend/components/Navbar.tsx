"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import SignUpForm from "./LandingPageComponents/SignupForm";
import LoginForm from "./LandingPageComponents/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
import { fetchUser, loadTokenFromStorage, logout } from "@/store/authSlice";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTokenFromStorage());
    dispatch(fetchUser());
  }, []);
  return (
    <nav className="w-full flex justify-between items-center px-3 md:px-8 py-4 md:py-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
      <h1 className="text-xl md:text-2xl font-bold md:font-extrabold tracking-wide">
        <span className="text-red-500">Faceless</span>Script AI
      </h1>

      {isAuthenticated ? (
        <div className="flex gap-2">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition shadow-lg shadow-red-600/30 cursor-pointer"
            >
              Dashboard
            </Button>
          </Link>

          <Button
            className="border border-white/20 hover:bg-white hover:text-black rounded-lg font-bold transition cursor-pointer"
            onClick={() => dispatch(logout())}
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="border border-white/20 hover:bg-white hover:text-black rounded-lg font-bold transition cursor-pointer"
              >
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary">
              <DialogTitle></DialogTitle>
              <LoginForm />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition shadow-lg shadow-red-600/30 cursor-pointer"
              >
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary">
              <DialogTitle></DialogTitle>
              <SignUpForm />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
