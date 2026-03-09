"use client";

import { useState } from "react";
import { MessageSquarePlus, X, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SuggestionModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({ tool: "", command: "", description: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulação de envio - Redirecionando para GitHub Issues com template
        const title = encodeURIComponent(`Sugestão: ${formData.tool}`);
        const body = encodeURIComponent(
            `### Ferramenta\n${formData.tool}\n\n### Comando\n\`${formData.command}\`\n\n### Descrição\n${formData.description}`
        );
        const githubUrl = `https://github.com/lazaaro01/Tech-Tools-Hub/issues/new?title=${title}&body=${body}`;

        window.open(githubUrl, "_blank");
        setSent(true);
        setTimeout(() => {
            setIsOpen(false);
            setSent(false);
            setFormData({ tool: "", command: "", description: "" });
        }, 3000);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-2xl hover:bg-indigo-700 hover:scale-110 active:scale-95 transition-all z-40 group"
                title="Sugerir comando"
            >
                <MessageSquarePlus size={24} />
                <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Sugerir novo comando
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-indigo-100 dark:border-indigo-900/50 overflow-hidden"
                        >
                            {!sent ? (
                                <>
                                    <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/50">
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                            <MessageSquarePlus className="text-indigo-600" /> Sugerir Comando
                                        </h2>
                                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                            <X size={20} />
                                        </button>
                                    </div>
                                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ferramenta</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                                                placeholder="Ex: Docker, Git, etc."
                                                value={formData.tool}
                                                onChange={e => setFormData({ ...formData, tool: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Comando</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono text-sm"
                                                placeholder="git push origin main"
                                                value={formData.command}
                                                onChange={e => setFormData({ ...formData, command: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">O que ele faz?</label>
                                            <textarea
                                                required
                                                rows={3}
                                                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                                                placeholder="Breve descrição do comando..."
                                                value={formData.description}
                                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all active:scale-95"
                                        >
                                            Abrir Issue no GitHub <Send size={18} />
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="p-12 text-center flex flex-col items-center gap-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center shadow-xl mb-2"
                                    >
                                        <CheckCircle2 size={40} />
                                    </motion.div>
                                    <h2 className="text-2xl font-bold dark:text-white">Obrigado!</h2>
                                    <p className="text-gray-600 dark:text-gray-400">Sua sugestão foi preparada. Verifique a aba do navegador para abrir a Issue.</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
