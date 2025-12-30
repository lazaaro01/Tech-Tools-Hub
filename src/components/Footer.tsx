"use client";

import { Heart, Terminal } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <Terminal size={18} className="text-indigo-500" />
                            <span className="text-sm font-medium italic">
                                "Qual era aquele comando mesmo?"
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            A solução definitiva para suas amnésias de terminal.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            Desenvolvido por{" "}
                            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent font-bold">
                                Lázaro Vasconcelos
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            © {currentYear} Tech Tools Hub. Feito para resolver aquele problema.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
