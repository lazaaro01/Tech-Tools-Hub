"use client";

import React, { createContext, useContext, useState } from "react";

export interface FavoriteItem {
  id: string;
  tags: string[];
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  addTagToFavorite: (id: string, tag: string) => void;
  removeTagFromFavorite: (id: string, tag: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("tech-tools-favorites-v2");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Erro ao carregar favoritos:", e);
      }
    }
    const oldSaved = localStorage.getItem("tech-tools-favorites");
    if (oldSaved) {
      try {
        const oldFavs: string[] = JSON.parse(oldSaved);
        const migrated = oldFavs.map(id => ({ id, tags: [] }));
        localStorage.setItem("tech-tools-favorites-v2", JSON.stringify(migrated));
        return migrated;
      } catch (e) {
        console.error("Erro na migração:", e);
      }
    }
    return [];
  });

  const saveToStorage = (newFavs: FavoriteItem[]) => {
    localStorage.setItem("tech-tools-favorites-v2", JSON.stringify(newFavs));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const exists = prev.find((f) => f.id === id);
      let newFavs;
      if (exists) {
        newFavs = prev.filter((f) => f.id !== id);
      } else {
        newFavs = [...prev, { id, tags: [] }];
      }
      saveToStorage(newFavs);
      return newFavs;
    });
  };

  const addTagToFavorite = (id: string, tag: string) => {
    setFavorites((prev) => {
      const newFavs = prev.map((f) => {
        if (f.id === id && !f.tags.includes(tag)) {
          return { ...f, tags: [...f.tags, tag] };
        }
        return f;
      });
      saveToStorage(newFavs);
      return newFavs;
    });
  };

  const removeTagFromFavorite = (id: string, tag: string) => {
    setFavorites((prev) => {
      const newFavs = prev.map((f) => {
        if (f.id === id) {
          return { ...f, tags: f.tags.filter((t) => t !== tag) };
        }
        return f;
      });
      saveToStorage(newFavs);
      return newFavs;
    });
  };

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, addTagToFavorite, removeTagFromFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
