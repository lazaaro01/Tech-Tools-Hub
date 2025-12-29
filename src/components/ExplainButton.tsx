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
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-black/5 backdrop-blur-[1px]"
                            onClick={() => setVisible(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute right-0 bottom-full mb-2 w-72 z-50 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-indigo-100 dark:border-indigo-900/50 text-sm leading-relaxed"
                        >
                            <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
                                    <Sparkles size={14} />
                                    IA Explain
                                </div>
                                <button
                                    onClick={() => setVisible(false)}
                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                            <p className="text-gray-700 dark:text-gray-200">
                                {explanation}
                            </p>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
