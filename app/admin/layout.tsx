// app/admin/layout.tsx
import Link from "next/link";
import "../globals.css";
import LogoutButton from '@/components/LogoutButton';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#1b1b1b] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#121212] border-r border-[#2a2a2a] p-6 space-y-6 hidden md:block">
        <h2 className="text-2xl font-bold font-serif text-[#f0e6d2]">مغل نامہ</h2>
        <nav className="flex flex-col space-y-4 text-sm">
          <Link
            href="/admin/dashboard"
            className="text-[#d4c2a3] hover:text-[#f8e2b8] transition"
          >
            📂 Dashboard
          </Link>
          <Link
            href="/admin/images"
            className="text-[#d4c2a3] hover:text-[#f8e2b8] transition"
          >
            🖼 Image List
          </Link>
          <LogoutButton />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-10">{children}</main>
    </div>
  );
}
