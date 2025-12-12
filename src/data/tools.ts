import { Tool } from "@/types/Tool";

export const tools: Tool[] = [
  {
    slug: "docker",
    name: "Docker",
    description: "Plataforma para criar, distribuir e rodar containers.",
    commands: [
      { title: "Listar containers", cmd: "docker ps" },
      { title: "Build da imagem", cmd: "docker build -t app ." },
      { title: "Rodar container", cmd: "docker run -p 3000:3000 app" }
    ],
    docs: "https://docs.docker.com"
  },
  {
    slug: "postman",
    name: "Postman",
    description: "Ferramenta para testar APIs de forma simples e poderosa.",
    commands: [
      { title: "Criar nova requisição", cmd: "N/A - Interface gráfica" }
    ],
    docs: "https://www.postman.com/"
  },
  {
    slug: "prisma",
    name: "Prisma ORM",
    description: "ORM moderno para Node.js com migrations automáticas.",
    commands: [
      { title: "Gerar client", cmd: "npx prisma generate" },
      { title: "Rodar migrations", cmd: "npx prisma migrate dev" }
    ],
    docs: "https://www.prisma.io/docs"
  }
];