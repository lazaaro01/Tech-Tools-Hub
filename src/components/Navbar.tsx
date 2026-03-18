import Link from "next/link";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import UserProfile from "./auth/UserProfile";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-2 md:gap-4">
        <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold shadow-lg">
            TH
          </div>
          <div>
            <div className="text-base md:text-lg font-bold tracking-tight">Tech Tools Hub</div>
            <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 hidden sm:block">Catálogo de ferramentas para devs</div>
          </div>
        </Link>

        <div className="flex-1 max-w-md">
          <SearchBar />
        </div>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <UserProfile />
          <a
            href="https://github.com/lazaaro01/Tech-Tools-Hub"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors hidden md:block"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}