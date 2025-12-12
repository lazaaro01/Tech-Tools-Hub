"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold shadow">
            TH
          </div>
          <div>
            <div className="text-lg font-semibold">Tech Tools Hub</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Catálogo de ferramentas para devs</div>
          </div>
        </Link>

        {/* espaço flexível: busca vai crescer */}
        <div className="flex-1">
          {/* SearchBar receberá uma função emitida via event (ver page.tsx) */}
          <SearchBar />
        </div>

        <div className="ml-4 flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}