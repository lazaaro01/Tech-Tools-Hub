"use client";

import Link from "next/link";
import { tools } from "@/data/tools";
import { Tool } from "@/types/Tool";
import CopyButton from "@/components/CopyButton";
import ExplainButton from "@/components/ExplainButton";
import { Star, Eye, EyeOff } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import CommandVisualizer from "@/components/CommandVisualizer";
import React from "react";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export default function ToolPage({ params }: ToolPageProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [showVisual, setShowVisual] = React.useState<Record<number, boolean>>({});
  const [difficultyFilter, setDifficultyFilter] = React.useState<string>("todas");
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;

  const tool: Tool | undefined = tools.find((t) => t.slug === slug);

  if (!tool) {
    return (
      <div className="p-10 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Ferramenta não encontrada</h2>
        <Link href="/" className="text-indigo-600 hover:underline">
          Voltar para Home
        </Link>
      </div>
    );
  }

  const filteredCommands = tool.commands.filter(c => {
    if (difficultyFilter === "todas") return true;
    return c.difficulty === difficultyFilter;
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-6 transition-colors"
      >
        ← Voltar
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold">{tool.name}</h1>
          <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {tool.category}
          </span>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">{tool.description}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Comandos Úteis</h2>
          <span className="text-sm text-gray-500">{filteredCommands.length} comandos</span>
        </div>

        <div className="px-6 pt-4 flex gap-2">
          {["todas", "iniciante", "intermediario", "avancado"].map(level => (
            <button
              key={level}
              onClick={() => setDifficultyFilter(level)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                difficultyFilter === level
                  ? level === "iniciante" ? "bg-green-500 text-white" : level === "intermediario" ? "bg-yellow-500 text-white" : level === "avancado" ? "bg-red-500 text-white" : "bg-indigo-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {level === "todas" ? "Todos" : level === "iniciante" ? "Iniciante" : level === "intermediario" ? "Intermediário" : "Avançado"}
            </button>
          ))}
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {filteredCommands.map((c, i) => {
            const cmdId = `${tool.slug}:${c.title}`;
            const active = isFavorite(cmdId);
            const isVisualVisible = showVisual[i];

            return (
              <div key={i} className="group p-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                       <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{c.title}</p>
                       {c.difficulty && (
                         <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md ${
                           c.difficulty === "iniciante" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" :
                           c.difficulty === "intermediario" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400" :
                           "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                         }`}>
                           {c.difficulty === "iniciante" ? "Iniciante" : c.difficulty === "intermediario" ? "Intermediário" : "Avançado"}
                         </span>
                       )}
                       <button
                        onClick={() => toggleFavorite(cmdId)}
                        className={`transition-colors ${active ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600 hover:text-yellow-400'}`}
                        title={active ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                      >
                        <Star size={14} fill={active ? "currentColor" : "none"} />
                      </button>
                    </div>
                    <div className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 rounded px-2 py-1.5 break-all border border-gray-200 dark:border-gray-700">
                      {c.cmd}
                    </div>
                  </div>
                  <div className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <button
                      onClick={() => setShowVisual(prev => ({ ...prev, [i]: !prev[i] }))}
                      className={`p-2 rounded-md transition ${isVisualVisible ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600'}`}
                      title="Ver visualização"
                    >
                      {isVisualVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    <ExplainButton command={c.cmd} toolName={tool.name} />
                    <CopyButton text={c.cmd} />
                  </div>
                </div>
                {isVisualVisible && <CommandVisualizer toolSlug={tool.slug} commandTitle={c.title} />}
              </div>
            );
          })}
        </div>
      </div>


      <a
        href={tool.docs}
        target="_blank"
        className="inline-flex items-center justify-center w-full mt-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:opacity-90 transition-opacity"
      >
        Ver Documentação Oficial ↗
      </a>
    </div>
  );
}