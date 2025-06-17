"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Delete the cookie
    document.cookie = "admin_token=; Max-Age=0; path=/";

    // Force hard redirect to clear client cache too
    router.replace("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-[#d4c2a3] hover:text-red-400 text-left transition"
    >
      🚪 Logout
    </button>
  );
}
