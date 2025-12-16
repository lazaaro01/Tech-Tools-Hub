import Link from "next/link";
import { tools } from "@/data/tools";
import { Tool } from "@/types/Tool";
import CopyButton from "@/components/CopyButton";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;

  const tool: Tool | undefined = tools.find((t) => t.slug === slug);

  if (!tool) {
    return (
      <div className="p-10 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Ferramenta não encontrada</h2>
        <Link href="/" className="text-indigo-600 hover:underline">
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-6 transition-colors"
      >
        ← Voltar
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold">{tool.name}</h1>
          <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {tool.category}
          </span>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">{tool.description}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Comandos Úteis</h2>
          <span className="text-sm text-gray-500">{tool.commands.length} comandos</span>
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {tool.commands.map((c, i) => (
            <div key={i} className="group p-4 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors flex items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{c.title}</p>
                <div className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 rounded px-2 py-1.5 break-all border border-gray-200 dark:border-gray-700">
                  {c.cmd}
                </div>
              </div>
              <div className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton text={c.cmd} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href={tool.docs}
        target="_blank"
        className="inline-flex items-center justify-center w-full mt-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:opacity-90 transition-opacity"
      >
        Ver Documentação Oficial ↗
      </a>
    </div>
  );
}