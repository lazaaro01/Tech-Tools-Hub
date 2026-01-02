"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const emit = (value: string) => {
    window.dispatchEvent(new CustomEvent("techtools:search", { detail: value }));
  };

  const debouncedEmit = useMemo(() => debounce(emit, 200), []);

  useEffect(() => {
    debouncedEmit(q);
  }, [q, debouncedEmit]);

  useEffect(() => {
    return () => {
      debouncedEmit.cancel();
    };
  }, [debouncedEmit]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative group">
      <div className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            debouncedEmit.cancel();
            emit(q);
          }
        }}
        placeholder="Buscar ferramentas..."
        className="w-full rounded-full border border-gray-200 dark:border-gray-700 pl-10 pr-12 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all shadow-sm hover:shadow-md"
      />
      {q ? (
        <button
          onClick={() => setQ("")}
          className="absolute right-3 top-2 text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
        >
          limpar
        </button>
      ) : (
        <div className="absolute right-3 top-2.5 text-xs text-gray-400 border border-gray-200 dark:border-gray-700 rounded px-1.5 hidden sm:block">
          /
        </div>
      )}
    </div>
  );
}