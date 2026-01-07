export interface Tip {
    id: number;
    title: string;
    content: string;
    command?: string;
    tool: string;
}

export const tips: Tip[] = [
    {
        id: 1,
        tool: "Git",
        title: "Recupere o que foi perdido",
        content: "Se você deletou um commit ou resetou sua branch por erro, use o 'reflog' para ver o histórico de onde sua cabeça (HEAD) esteve.",
        command: "git reflog"
    },
    {
        id: 2,
        tool: "Docker",
        title: "Limpeza profunda",
        content: "Remova todos os containers parados, redes não utilizadas e imagens pendentes de uma só vez.",
        command: "docker system prune"
    },
    {
        id: 3,
        tool: "Linux",
        title: "Busca inteligente",
        content: "O comando 'grep' pode buscar textos dentro de arquivos de forma recursiva em todo o diretório atual.",
        command: "grep -r 'termo_de_busca' ."
    },
    {
        id: 4,
        tool: "NPM",
        title: "Segurança em primeiro lugar",
        content: "Verifique vulnerabilidades conhecidas em suas dependências instaladas.",
        command: "npm audit"
    },
    {
        id: 5,
        tool: "VS Code",
        title: "Edição multi-cursor",
        content: "Pressione 'Alt + Click' em diferentes linhas para criar múltiplos cursores e editar tudo simultaneamente.",
    },
    {
        id: 6,
        tool: "Git",
        title: "Undo do último commit",
        content: "Fez commit mas esqueceu de adicionar um arquivo? Use o --amend para atualizar o último commit sem criar um novo.",
        command: "git commit --amend --no-edit"
    },
    {
        id: 7,
        tool: "Terminal",
        title: "Volte para o diretório anterior",
        content: "Mude rapidamente para o diretório onde você estava antes do último 'cd'.",
        command: "cd -"
    },
    {
        id: 8,
        tool: "Node.js",
        title: "Verifique versões de pacotes",
        content: "Liste todas as dependências instaladas com suas versões para manter o controle do projeto.",
        command: "npm list --depth=0"
    },
    {
        id: 9,
        tool: "React",
        title: "Hooks personalizados",
        content: "Crie hooks personalizados para reutilizar lógica de estado entre componentes, tornando seu código mais limpo e modular.",
    },
    {
        id: 10,
        tool: "TypeScript",
        title: "Tipos utilitários",
        content: "Use tipos utilitários como 'Partial' ou 'Pick' para manipular interfaces de forma eficiente sem redefini-las.",
    },
    {
        id: 11,
        tool: "Bash",
        title: "Histórico de comandos",
        content: "Pressione 'Ctrl + R' para buscar no histórico de comandos do terminal de forma interativa.",
    },
    {
        id: 12,
        tool: "Git",
        title: "Stash temporário",
        content: "Salve mudanças não commitadas temporariamente com 'stash' para alternar entre branches sem perder trabalho.",
        command: "git stash"
    },
    {
        id: 13,
        tool: "Docker",
        title: "Logs em tempo real",
        content: "Monitore os logs de um container em execução para depurar aplicações em tempo real.",
        command: "docker logs -f container_name"
    },
    {
        id: 14,
        tool: "VS Code",
        title: "Snippets personalizados",
        content: "Crie snippets personalizados no VS Code para acelerar a escrita de código repetitivo.",
    },
    {
        id: 15,
        tool: "NPM",
        title: "Scripts customizados",
        content: "Defina scripts personalizados no package.json para automatizar tarefas comuns do projeto.",
    },
    {
        id: 16,
        tool: "Linux",
        title: "Processos em execução",
        content: "Liste todos os processos em execução com detalhes para monitorar o sistema.",
        command: "ps aux"
    }
];