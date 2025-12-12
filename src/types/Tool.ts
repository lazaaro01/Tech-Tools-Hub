export interface Tool {
  slug: string;
  name: string;
  description: string;
  commands: {
    title: string;
    cmd: string;
  }[];
  docs: string;
}
