"use client";

import { useEffect, useMemo, useState } from "react";
import { Tool } from "@/types/Tool";
import ToolCard from "./ToolCard";

interface Props {
  initialTools: Tool[];
}

export default function ToolsGrid({ initialTools }: Props) {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent;
      setQuery(ev.detail || "");
    };
    window.addEventListener("techtools:search", handler as EventListener);
    return () => window.removeEventListener("techtools:search", handler as EventListener);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return initialTools;
    const q = query.toLowerCase();
    return initialTools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.slug.toLowerCase().includes(q)
    );
  }, [query, initialTools]);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((t) => (
          <ToolCard key={t.slug} tool={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 text-center text-gray-500">Nenhuma ferramenta encontrada para essa busca.</div>
      )}
    </section>
  );
}