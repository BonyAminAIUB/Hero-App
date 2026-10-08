import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center">

        {/* 404 */}
        <h1 className="text-[140px] md:text-[180px] font-extrabold leading-none tracking-tight bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md mx-auto text-slate-400 text-lg">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or
          has been moved somewhere else.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Error */}
        <p className="mt-10 text-sm text-slate-600">
          Error 404 • Page Not Found
        </p>
      </div>
    </main>
  );
}