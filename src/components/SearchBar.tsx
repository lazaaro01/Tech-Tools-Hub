"use client";

import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

export default function SearchBar() {
  const [q, setQ] = useState("");

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

  return (
    <div className="relative">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar ferramentas (ex: docker, prisma, rails)..."
        className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 bg-white dark:bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
      {q && (
        <button onClick={() => setQ("")} className="absolute right-2 top-2 text-sm text-gray-500">
          limpar
        </button>
      )}
    </div>
  );
}