"use client";

import { motion } from "framer-motion";
import { GitBranch, Box, Database, Terminal, FileCode } from "lucide-react";

interface VisualizerProps {
    toolSlug: string;
    commandTitle: string;
}

export default function CommandVisualizer({ toolSlug, commandTitle }: VisualizerProps) {
    // Git Visualizations
    if (toolSlug === "git") {
        if (commandTitle.toLowerCase().includes("branch") || commandTitle.toLowerCase().includes("checkout -b")) {
            return (
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 mt-4 overflow-hidden">
                    <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs uppercase tracking-widest font-bold">
                        <GitBranch size={14} /> Simulação de Branch
                    </div>
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
                    <p className="text-gray-400 text-[10px] text-center mt-2 italic">Nova branch criada a partir do commit atual</p>
                </div>
            );
        }

        if (commandTitle.toLowerCase().includes("commit")) {
            return (
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 mt-4 overflow-hidden">
                    <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs uppercase tracking-widest font-bold">
                        <FileCode size={14} /> Ciclo do Commit
                    </div>
                    <div className="flex items-center justify-around">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center border border-gray-700 text-gray-500">
                                docs
                            </div>
                            <span className="text-[10px] text-gray-500">Local</span>
                        </div>
                        <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-indigo-500">→</motion.div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded bg-indigo-500/20 flex items-center justify-center border border-indigo-500/50 text-indigo-400">
                                add
                            </div>
                            <span className="text-[10px] text-indigo-400">Staging</span>
                        </div>
                        <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="text-green-500">→</motion.div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded bg-green-500/20 flex items-center justify-center border border-green-500/50 text-green-400">
                                commit
                            </div>
                            <span className="text-[10px] text-green-400">History</span>
                        </div>
                    </div>
                </div>
            );
        }
    }

    // Docker Visualizations
    if (toolSlug === "docker") {
        if (commandTitle.toLowerCase().includes("run") || commandTitle.toLowerCase().includes("build")) {
            return (
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 mt-4 overflow-hidden">
                    <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs uppercase tracking-widest font-bold">
                        <Box size={14} /> Container Lifecycle
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="p-6 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400"
                        >
                            <Box size={32} />
                        </motion.div>
                        <div className="flex flex-col gap-1">
                            <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ repeat: Infinity, duration: 1.5 }} className="h-1 bg-sky-500/30 rounded" />
                            <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="h-1 bg-sky-500/30 rounded" />
                            <motion.div initial={{ width: 0 }} animate={{ width: 30 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="h-1 bg-sky-500/30 rounded" />
                        </div>
                    </div>
                    <p className="text-sky-400/60 text-[10px] text-center mt-3">Isolamento e execução do container</p>
                </div>
            );
        }
    }

    // Default Fallback (Generic Terminal Visual)
    return (
        <div className="p-4 bg-gray-900 rounded-xl border border-gray-700 mt-4 overflow-hidden">
            <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs uppercase tracking-widest font-bold">
                <Terminal size={14} /> Terminal Flow
            </div>
            <div className="font-mono text-[10px] text-green-500/70 p-2 bg-black/40 rounded border border-white/5 space-y-1">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 2 }}>$ {toolSlug} ...</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="text-white/40">{`> Processing...`}</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="text-green-400">{`✔ Success`}</motion.p>
            </div>
        </div>
    );
}
