"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { FcGoogle } from "react-icons/fc"; // <-- install react-icons if not installed
import { signUpUser } from "@/services/AuthService";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { fetchUser, setToken } from "@/store/authSlice";

const SignUpSchema = z
  .object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpData = z.infer<typeof SignUpSchema>;

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchema),
  });

  async function onSubmit(data: SignUpData) {
    setLoading(true);
    console.log("Signup Data:", data);
    try {
      setLoading(true);
      const res = await signUpUser(data.email, data.password);
      dispatch(setToken(res.token));
      dispatch(fetchUser());
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleGoogleLogin = async () => {
    console.log("Google Login Clicked");
    // TODO: trigger your OAuth flow here
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold">Create Account</h2>
        <p className="text-sm text-muted-foreground">Sign up to get started</p>
      </div>

      {/* Google Button */}
      <Button
        type="button"
        onClick={handleGoogleLogin}
        variant="outline"
        className="w-full gap-2 font-medium text-black"
      >
        <FcGoogle size={22} />
        Continue with Google
      </Button>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <span className="h-px w-full bg-border" />
        <span className="text-xs text-muted-foreground">OR</span>
        <span className="h-px w-full bg-border" />
      </div>

      {/* Normal Signup Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          className="bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition shadow-lg shadow-red-600/30 cursor-pointer w-full"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </Button>
      </form>
    </div>
  );
}
