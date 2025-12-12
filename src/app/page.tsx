import { tools as allTools } from "@/data/tools";
import ToolsGrid from "@/components/ToolsGrid";

export default function Home() {
  return (
    <main>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Tech Tools Hub</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Um catálogo prático de comandos e atalhos para desenvolvedores.</p>
      </div>

      <ToolsGrid initialTools={allTools} />
    </main>
  );
}