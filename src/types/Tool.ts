export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  commands: {
    title: string;
    cmd: string;
    difficulty?: "iniciante" | "intermediario" | "avancado";
  }[];
  docs: string;
}