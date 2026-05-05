"use client";

import { useState } from "react";
import { tips, Tip } from "@/data/tips";
import { Lightbulb, Copy, Check, Sparkles } from "lucide-react";

export default function DailyTip() {
    const [tip] = useState<Tip | null>(() => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now.getTime() - start.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        const index = dayOfYear % tips.length;
        return tips[index];
    });
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!tip) return null;

    return (
        <div className="relative overflow-hidden rounded-2xl border border-indigo-100 dark:border-indigo-900/30 bg-gradient-to-r from-indigo-50/50 to-violet-50/50 dark:from-indigo-950/20 dark:to-violet-950/20 p-6 shadow-sm mb-10 transition-all hover:shadow-md">
            <div className="absolute -right-4 -top-4 text-indigo-200/20 dark:text-indigo-800/20 rotate-12">
                <Sparkles size={120} />
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                    <Lightbulb size={24} />
                </div>

                <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            Dica do Dia: {tip.tool}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {tip.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        {tip.content}
                    </p>
                </div>

                {tip.command && (
                    <div className="flex-shrink-0">
                        <div className="flex items-center gap-3 p-1.5 pl-4 rounded-lg bg-white/80 dark:bg-black/40 border border-indigo-100 dark:border-indigo-800 backdrop-blur-sm">
                            <code className="text-sm font-mono text-indigo-700 dark:text-indigo-300">
                                {tip.command}
                            </code>
                            <button
                                onClick={() => copyToClipboard(tip.command!)}
                                className="p-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/40 transition text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                                title="Copiar comando"
                            >
                                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
