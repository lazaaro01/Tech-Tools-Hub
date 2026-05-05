"use client";

import Link from "next/link";
import { Tool } from "@/types/Tool";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { toggleFavorite, isFavorite, favorites } = useFavorites();
  const toolId = `tool:${tool.slug}`;
  const active = isFavorite(toolId);
  const hasFavoriteCommands = tool.commands.some(c => favorites.some(f => f.id === `${tool.slug}:${c.title}`));

  return (
    <div className="relative group/card h-full">
      <Link href={`/tool/${tool.slug}`} className="block h-full">
        <motion.article
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="h-full border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-900 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {tool.name}
              </h3>
              {(active || hasFavoriteCommands) && (
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
              {tool.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-50 dark:border-gray-700/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                {tool.commands.length} comandos
              </div>
              {tool.commands.some(c => c.difficulty === "avancado") && (
                <div className="px-2 py-0.5 bg-red-50 dark:bg-red-900/20 rounded-md text-[9px] font-bold text-red-500 uppercase">
                  Avançado
                </div>
              )}
            </div>
            <div className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Explorar →
            </div>
          </div>
        </motion.article>
      </Link>

      {/* Botão de Favorito sobreposto */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(toolId);
        }}
        className={`absolute top-4 right-4 p-2.5 rounded-xl transition-all z-20 shadow-sm ${active
            ? 'bg-yellow-500 text-white scale-100 rotate-0 shadow-yellow-200 dark:shadow-none'
            : 'bg-white/80 dark:bg-gray-700/80 backdrop-blur-md text-gray-400 hover:text-yellow-500 opacity-0 group-hover/card:opacity-100 hover:scale-110'
          }`}
        title={active ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        <Star size={18} fill={active ? "currentColor" : "none"} strokeWidth={active ? 0 : 2} />
      </button>
    </div>
  );
}