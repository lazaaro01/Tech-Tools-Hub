"use client";

import { useFavorites } from "@/context/FavoritesContext";
import { tools } from "@/data/tools";
import { Star, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfileFavorites() {
  const { favorites, toggleFavorite, addTagToFavorite, removeTagFromFavorite } = useFavorites();
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [newTagInput, setNewTagInput] = useState<Record<string, string>>({});

  const favoriteTools = useMemo(() => {
    return favorites.map((fav) => {
      const [toolSlug, cmdTitle] = fav.id.split(":");
      const tool = tools.find((t) => t.slug === toolSlug);
      const command = tool?.commands.find((c) => c.title === cmdTitle);
      return { ...fav, tool, command };
    }).filter(f => f.tool && f.command);
  }, [favorites]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    favorites.forEach(f => f.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, [favorites]);

  const filteredFavorites = useMemo(() => {
    if (!filterTag) return favoriteTools;
    return favoriteTools.filter(f => f.tags.includes(filterTag));
  }, [favoriteTools, filterTag]);

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 dark:bg-gray-900/50 rounded-[32px] border-2 border-dashed border-gray-200 dark:border-gray-800">
        <Star className="mx-auto text-gray-300 mb-4" size={48} />
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Nenhum favorito ainda</h3>
        <p className="text-gray-500 text-sm mt-2">Explore as ferramentas e clique na estrela para salvar comandos.</p>
        <Link href="/" className="inline-block mt-6 text-indigo-600 font-bold hover:underline">Ir para Ferramentas</Link>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Star className="text-yellow-400 fill-yellow-400" size={24} />
          Meus Favoritos
        </h2>
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            {filteredFavorites.length} Comandos
        </span>
      </div>

      {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
              <button
                  onClick={() => setFilterTag(null)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${!filterTag ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                  Todos
              </button>
              {allTags.map(tag => (
                  <button
                      key={tag}
                      onClick={() => setFilterTag(tag)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filterTag === tag ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                  >
                      #{tag}
                  </button>
              ))}
          </div>
      )}

      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {filteredFavorites.map((fav) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={fav.id}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm relative group"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded">
                            {fav.tool?.name}
                        </span>
                        <Link 
                            href={`/tool/${fav.tool?.slug}`}
                            className="text-gray-400 hover:text-indigo-600 transition-colors"
                        >
                            <ExternalLink size={12} />
                        </Link>
                    </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{fav.command?.title}</h4>
                </div>
                <button
                  onClick={() => toggleFavorite(fav.id)}
                  className="text-yellow-400 hover:scale-110 transition-transform"
                >
                  <Star size={20} fill="currentColor" />
                </button>
              </div>

              <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 mb-4 break-all">
                {fav.command?.cmd}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {fav.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-[11px] font-medium"
                  >
                    #{tag}
                    <button
                      onClick={() => removeTagFromFavorite(fav.id, tag)}
                      className="hover:text-red-500 transition-colors"
                    >
                      <X size={10} />
                    </button>
                  </span>
                ))}
                
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Adicionar tag..."
                        value={newTagInput[fav.id] || ""}
                        onChange={(e) => setNewTagInput(prev => ({ ...prev, [fav.id]: e.target.value }))}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && newTagInput[fav.id]) {
                                addTagToFavorite(fav.id, newTagInput[fav.id].toLowerCase().trim());
                                setNewTagInput(prev => ({ ...prev, [fav.id]: "" }));
                            }
                        }}
                        className="bg-transparent border-b border-gray-200 dark:border-gray-700 text-[11px] py-0.5 outline-none focus:border-indigo-500 min-w-[80px]"
                    />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
