"use client";

import { useState, useEffect } from "react";

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("tech-tools-favorites");
        if (saved) {
            try {
                setFavorites(JSON.parse(saved));
            } catch (e) {
                console.error("Erro ao carregar favoritos:", e);
            }
        }
    }, []);

    const toggleFavorite = (commandSlug: string) => {
        setFavorites((prev) => {
            const isFavorite = prev.includes(commandSlug);
            let newFavorites;
            if (isFavorite) {
                newFavorites = prev.filter((id) => id !== commandSlug);
            } else {
                newFavorites = [...prev, commandSlug];
            }
            localStorage.setItem("tech-tools-favorites", JSON.stringify(newFavorites));
            return newFavorites;
        });
    };

    const isFavorite = (commandSlug: string) => favorites.includes(commandSlug);

    return { favorites, toggleFavorite, isFavorite };
}
