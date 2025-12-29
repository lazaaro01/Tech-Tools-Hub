import { tools as allTools } from "@/data/tools";
import ToolsGrid from "@/components/ToolsGrid";
import DailyTip from "@/components/DailyTip";

export default function Home() {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Tech Tools Hub</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1 italic">Um catálogo prático de comandos e atalhos para desenvolvedores.</p>
      </div>

      <DailyTip />

      <ToolsGrid initialTools={allTools} />
    </main>
  );
}