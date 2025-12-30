"use client";

import { useState } from "react";
import { Sparkles, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExplainButtonProps {
    command: string;
    toolName: string;
}

export default function ExplainButton({ command, toolName }: ExplainButtonProps) {
    const [explanation, setExplanation] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleExplain = async () => {
        if (explanation) {
            setVisible(true);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch("/api/explain", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ command, toolName }),
            });
            const data = await response.json();
            if (data.explanation) {
                setExplanation(data.explanation);
                setVisible(true);
            }
        } catch (error) {
            console.error("Erro ao buscar explicação:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={handleExplain}
                disabled={loading}
                className="p-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/40 transition text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 disabled:opacity-50"
                title="Explicar com IA"
            >
                {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
            </button>

            <AnimatePresence>
                {visible && explanation && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setVisible(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-indigo-100 dark:border-indigo-900/50 overflow-hidden"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider">
                                    <Sparkles size={18} />
                                    Explicar com IA
                                </div>
                                <button
                                    onClick={() => setVisible(false)}
                                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed whitespace-pre-wrap">
                                        {explanation}
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                                <button
                                    onClick={() => setVisible(false)}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                                >
                                    Entendi
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
