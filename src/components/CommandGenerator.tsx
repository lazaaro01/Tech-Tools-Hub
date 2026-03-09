"use client";

import { useState } from "react";
import { Sparkles, Loader2, Copy, Check, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandGenerator() {
    const [prompt, setPrompt] = useState("");
    const [command, setCommand] = useState("");
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState("");

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setLoading(true);
        setError("");
        setCommand("");

        try {
            const response = await fetch("/api/generate-command", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });
            const data = await response.json();

            if (data.command) {
                setCommand(data.command);
            } else {
                setError(data.error || "Erro inesperado");
            }
        } catch (err) {
            setError("Falha na conexão com o servidor");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="w-full max-w-4xl mx-auto mb-12 px-4">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-900 dark:to-violet-950 p-6 md:p-8 rounded-3xl shadow-xl border border-indigo-400/20 text-white overflow-hidden relative">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md">
                            <Sparkles className="text-indigo-200" size={24} />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight">Gerador de Comandos IA</h2>
                    </div>

                    <p className="text-indigo-100 mb-6 text-sm md:text-base opacity-90 max-w-2xl">
                        Descreva em português o que você deseja fazer no terminal e a IA encontrará o comando certo para você.
                    </p>

                    <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-3">
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Ex: 'como remover todos os containers docker parados'"
                            className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white placeholder:text-indigo-200/50 outline-none focus:ring-2 focus:ring-white/30 transition-all backdrop-blur-md"
                        />
                        <button
                            type="submit"
                            disabled={loading || !prompt.trim()}
                            className="bg-white text-indigo-700 px-8 py-3 rounded-2xl font-semibold hover:bg-indigo-50 active:scale-95 transition-all disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2 shadow-lg shadow-black/10"
                        >
                            {loading ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <>Gerar <Terminal size={18} /></>
                            )}
                        </button>
                    </form>

                    <AnimatePresence>
                        {(command || error) && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="mt-6 pt-6 border-t border-white/10"
                            >
                                {command && (
                                    <div className="bg-black/20 rounded-2xl p-4 md:p-5 flex items-center justify-between gap-4 border border-white/5 group">
                                        <code className="text-indigo-100 font-mono text-sm md:text-base break-all">
                                            {command}
                                        </code>
                                        <button
                                            onClick={copyToClipboard}
                                            className="p-2.5 bg-white/10 rounded-xl hover:bg-white/20 transition-colors shrink-0"
                                            title="Copiar comando"
                                        >
                                            {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                )}
                                {error && (
                                    <p className="text-red-300 text-sm bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                                        {error}
                                    </p>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
