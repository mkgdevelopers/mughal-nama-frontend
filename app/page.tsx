import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0d0c] text-[#f4e9dc] font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[url('/mughal-pattern-dark.png')] bg-cover bg-center">
        <h1 className="text-5xl md:text-7xl font-mughal text-[#fcdca3] mb-4 drop-shadow-lg">Mughal Nama</h1>
        <p className="font-urdu text-2xl max-w-3xl mb-6 text-[#e2d4b7] leading-loose">
          خوابوں، یادوں اور لفظوں کی کتاب — ایک جذباتی سفر
        </p>
        <Link href="/book">
          <button className="mt-4 px-6 py-3 bg-[#d4a373] text-black font-semibold rounded-full hover:bg-[#b88850] transition">
            شاعری دیکھیں
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-[#a99c88] py-6 bg-[#0d0d0d]">
        © 2025 Mughal Nama — دل کی زبان، لفظوں کی صورت
      </footer>
    </main>
  );
}
