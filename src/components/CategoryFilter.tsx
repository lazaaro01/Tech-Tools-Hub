"use client";

import { motion } from "framer-motion";

interface Props {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar items-center">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors z-10 ${selected === cat
                            ? "text-white"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                >
                    {selected === cat && (
                        <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {cat}
                </button>
            ))}
        </div>
    );
}
