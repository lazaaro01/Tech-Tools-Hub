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
    return <div className="p-10">Ferramenta não encontrada.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
      <p className="text-gray-700 mb-6">{tool.description}</p>

      <h2 className="text-xl font-semibold mb-3">Comandos Úteis</h2>

      <div className="space-y-4">
        {tool.commands.map((c, i) => (
          <div key={i} className="flex items-center justify-between border rounded-lg p-3 bg-gray-50">
            <div>
              <p className="font-medium">{c.title}</p>
              <code className="text-sm text-gray-700">{c.cmd}</code>
            </div>

            <CopyButton text={c.cmd} />
          </div>
        ))}
      </div>

      <a
        href={tool.docs}
        target="_blank"
        className="block mt-8 text-blue-600 underline"
      >
        Documentação Oficial
      </a>
    </div>
  );
}