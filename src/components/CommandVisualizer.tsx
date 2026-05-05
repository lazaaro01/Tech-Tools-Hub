"use client";

import { motion } from "framer-motion";
import { Terminal, Box, Info } from "lucide-react";
import { useMemo, useState } from "react";
import { tools } from "@/data/tools";

interface VisualizerProps {
    toolSlug: string;
    commandTitle: string;
}

const FLAG_DESCRIPTIONS: Record<string, string> = {
    "-a": "All (Todos) - Inclui itens ocultos ou inativos.",
    "-l": "Long (Longo) - Formato detalhado com permissões e datas.",
    "-f": "Force / Follow - Força a execução ou segue logs em tempo real.",
    "-m": "Message - Define a mensagem descritiva (ex: no commit).",
    "-p": "Publish - Mapeia portas do container para a máquina local.",
    "-t": "Tag - Define um nome/versão para a imagem.",
    "-d": "Detached - Roda o container em segundo plano.",
    "-v": "Volume - Mapeia uma pasta local para dentro do container.",
    "--oneline": "Formato de linha única para histórico resumido.",
    "--name": "Atribui um nome customizado ao recurso.",
    "-it": "Interativo + TTY - Permite interagir com o terminal do container.",
    "-rf": "Recursive + Force - Apaga pastas e conteúdos sem pedir confirmação.",
    "-la": "List All (Detalhado) - Combina listas detalhadas e arquivos ocultos."
};

export default function CommandVisualizer({ toolSlug, commandTitle }: VisualizerProps) {
    const [activeFlag, setActiveFlag] = useState<string | null>(null);

    const tool = tools.find(t => t.slug === toolSlug);
    const command = tool?.commands.find(c => c.title === commandTitle);
    
    const detectedFlags = useMemo(() => {
        if (!command) return [];
        const flags = command.cmd.match(/-[a-zA-Z]+|--[a-z-]+/g) || [];
        return Array.from(new Set(flags));
    }, [command]);

    const renderGit = () => {
        if (commandTitle.toLowerCase().includes("branch") || commandTitle.toLowerCase().includes("checkout -b")) {
            return (
                <div className="relative h-20 flex items-center justify-center">
                    <div className="absolute h-0.5 w-full bg-gray-700 top-1/2 -translate-y-1/2" />
                    <div className="flex gap-12 relative z-10 w-full justify-center">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                        <div className="relative">
                            <motion.div
                                initial={{ y: 0, x: -20, opacity: 0 }}
                                animate={{ y: -30, x: 20, opacity: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                            />
                            <motion.div
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                className="absolute top-1/2 left-1/2 -ml-2 w-10 h-10 border-l-2 border-t-2 border-green-400 rounded-tl-xl pointer-events-none"
                                style={{ transform: 'translateY(-100%)' }}
                            />
                        </div>
                    </div>
                </div>
            );
        }

        if (commandTitle.toLowerCase().includes("commit")) {
            return (
                <div className="flex items-center justify-around py-2">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center border border-gray-700 text-gray-500">
                            docs
                        </div>
                        <span className="text-[10px] text-gray-500">Local</span>
                    </div>
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-indigo-500">→</motion.div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded bg-indigo-500/20 flex items-center justify-center border border-indigo-500/50 text-indigo-400">
                            add
                        </div>
                        <span className="text-[10px] text-indigo-400">Staging</span>
                    </div>
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="text-green-500">→</motion.div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded bg-green-500/20 flex items-center justify-center border border-green-500/50 text-green-400">
                            commit
                        </div>
                        <span className="text-[10px] text-green-400">History</span>
                    </div>
                </div>
            );
        }
        return null;
    };

    const renderDocker = () => {
        if (commandTitle.toLowerCase().includes("run") || commandTitle.toLowerCase().includes("build")) {
            return (
                <div className="flex items-center justify-center gap-6 py-4">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="p-6 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400"
                    >
                        <Box size={32} />
                    </motion.div>
                    <div className="flex flex-col gap-1.5">
                        <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ repeat: Infinity, duration: 1.5 }} className="h-1.5 bg-sky-500/30 rounded-full" />
                        <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="h-1.5 bg-sky-500/30 rounded-full" />
                        <motion.div initial={{ width: 0 }} animate={{ width: 35 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="h-1.5 bg-sky-500/30 rounded-full" />
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="p-5 bg-gray-900 rounded-2xl border border-gray-700 mt-4 overflow-hidden shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">
                    <Terminal size={14} className="text-indigo-400" /> 
                    <span>Live Breakdown</span>
                </div>
                {detectedFlags.length > 0 && (
                    <div className="flex items-center gap-1 text-[10px] text-green-400/80 font-mono">
                         {detectedFlags.length} flags detectadas
                    </div>
                )}
            </div>

            {/* Main Content (Visuals) */}
            <div className="mb-6">
                {toolSlug === "git" ? renderGit() : toolSlug === "docker" ? renderDocker() : (
                    <div className="font-mono text-[10px] text-green-500/50 p-3 bg-black/40 rounded-xl border border-white/5 space-y-1">
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 3 }}>$ {toolSlug} {command?.cmd.split(' ').slice(1).join(' ')}</motion.p>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} className="text-white/30">{`> Verificando parâmetros...`}</motion.p>
                    </div>
                )}
            </div>

            {/* Interactive Flags Section */}
            {detectedFlags.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {detectedFlags.map(flag => (
                            <button
                                key={flag}
                                onMouseEnter={() => setActiveFlag(flag)}
                                onClick={() => setActiveFlag(flag)}
                                className={`px-2 py-1 rounded-md font-mono text-xs transition-all ${activeFlag === flag ? 'bg-indigo-500 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hove:text-gray-200'}`}
                            >
                                {flag}
                            </button>
                        ))}
                    </div>
                    <div className="min-h-[40px] bg-indigo-500/5 rounded-xl p-3 border border-indigo-500/10">
                        {activeFlag ? (
                            <div className="flex items-start gap-2">
                                <Info size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                                <p className="text-[11px] text-gray-300 leading-relaxed">
                                    <span className="font-bold text-indigo-400 mr-1">{activeFlag}:</span>
                                    {FLAG_DESCRIPTIONS[activeFlag] || "Parâmetro específico da ferramenta."}
                                </p>
                            </div>
                        ) : (
                            <p className="text-[10px] text-gray-500 italic">Clique ou passe o mouse sobre uma flag para ver o significado.</p>
                        )}
                    </div>
                </div>
            )}
            
            <p className="text-gray-500 text-[9px] text-center mt-4 uppercase tracking-widest opacity-50">Tech Tools Hub Visualizer</p>
        </div>
    );
}
