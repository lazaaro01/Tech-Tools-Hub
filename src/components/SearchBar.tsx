"use client";

import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const emit = (value: string) => {
    window.dispatchEvent(new CustomEvent("techtools:search", { detail: value }));
  };

  const debouncedEmit = debounce(emit, 200);

  useEffect(() => {
    debouncedEmit(q);
    return () => {
      debouncedEmit.cancel();
    };
  }, [q]);

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
    <div className="relative">
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar ferramentas (ou pressione '/')..."
        className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 bg-white dark:bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
      {q ? (
        <button onClick={() => setQ("")} className="absolute right-2 top-2 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
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