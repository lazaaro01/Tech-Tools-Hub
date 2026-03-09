import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(request: Request) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: "API Key não configurada" }, { status: 500 });
    }

    const groq = new Groq({ apiKey });

    try {
        const { prompt } = await request.json();
        if (!prompt) {
            return NextResponse.json({ error: "Prompt não fornecido" }, { status: 400 });
        }

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `Você é um gerador de comandos de terminal. 
                    Retorne APENAS o comando de terminal solicitado pelo usuário, sem explicações, sem blocos de código markdown, sem texto adicional. 
                    Se não souber o comando ou se o pedido não for relacionado a comandos de TI, retorne "Não encontrei um comando para isso.".
                    Se o comando for para uma ferramenta específica que você conhece, use a sintaxe mais atualizada.`,
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.1,
            max_tokens: 100,
        });

        const command = completion.choices[0]?.message?.content?.trim() || "Não foi possível gerar o comando.";

        return NextResponse.json({ command });
    } catch (error: any) {
        console.error("Erro na Groq API:", error);
        return NextResponse.json({
            error: "Erro ao gerar comando",
            details: error.message || String(error)
        }, { status: 500 });
    }
}
