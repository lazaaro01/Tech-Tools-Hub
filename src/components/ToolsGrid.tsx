"use client";

import { useEffect, useMemo, useState } from "react";
import { Tool } from "@/types/Tool";
import ToolCard from "./ToolCard";
import CategoryFilter from "./CategoryFilter";

interface Props {
  initialTools: Tool[];
}

export default function ToolsGrid({ initialTools }: Props) {
  const [query, setQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent;
      setQuery(ev.detail || "");
    };
    window.addEventListener("techtools:search", handler as EventListener);
    return () => window.removeEventListener("techtools:search", handler as EventListener);
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(initialTools.map((t) => t.category)));
    return ["Todas", ...cats].sort();
  }, [initialTools]);

  const filtered = useMemo(() => {
    let result = initialTools;

    if (selectedCategory !== "Todas") {
      result = result.filter((t) => t.category === selectedCategory);
    }

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.slug.toLowerCase().includes(q)
      );
    }

    return result;
  }, [query, selectedCategory, initialTools]);

  return (
    <section>
      <div className="mb-6">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((t) => (
          <ToolCard key={t.slug} tool={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 text-center text-gray-500">
          Nenhuma ferramenta encontrada para essa busca.
        </div>
      )}
    </section>
  );
}