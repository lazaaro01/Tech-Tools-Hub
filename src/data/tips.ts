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
    }
];
