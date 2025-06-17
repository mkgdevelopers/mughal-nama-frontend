"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
const [password, setPassword] = useState("");
const [error, setError] = useState(""); // <-- add this line

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      document.cookie = `admin_token=secure; path=/; max-age=3600`;
      router.push("/admin/dashboard");
    } else {
setError("Incorrect password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#1b1b1b] text-white">
      <div className="bg-[#262626] p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-[#1a1a1a] border border-[#444] text-white mb-4 outline-none focus:ring-2 focus:ring-[#f0e6d2]"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-[#f0e6d2] text-black py-2 rounded hover:bg-[#e2d3b0] transition font-semibold"
        >
          Login
        </button>
        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
        )}
      </div>
    </div>
  );
}
