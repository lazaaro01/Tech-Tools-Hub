"use client";

import Link from "next/link";
import { Tool } from "@/types/Tool";
import { motion } from "framer-motion";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tool/${tool.slug}`} className="group">
      <motion.article
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.18 }}
        className="h-full border rounded-xl p-4 shadow-sm hover:shadow-lg transition-colors bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-lg font-semibold">{tool.name}</div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{tool.description}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-500 dark:text-gray-400">{tool.commands.length} comandos</div>
          <div className="text-indigo-600 dark:text-indigo-400 font-medium">Ver detalhes →</div>
        </div>
      </motion.article>
    </Link>
  );
}