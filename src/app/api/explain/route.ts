import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(request: Request) {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        console.error("GROQ_API_KEY is missing from process.env");
        return NextResponse.json({ error: "API Key não configurada no servidor" }, { status: 500 });
    }

    console.log("Using API Key with length:", apiKey.length);
    const groq = new Groq({ apiKey });

    try {
        const { command, toolName } = await request.json();

        if (!command) {
            return NextResponse.json({ error: "Comando não fornecido" }, { status: 400 });
        }

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "Você é um especialista em terminal e desenvolvimento. Explique o comando fornecido de forma extremamente concisa e técnica em português do Brasil. Foque no que o comando faz e o significado das suas flags principais. Não use introduções como 'Este comando...', vá direto ao ponto.",
                },
                {
                    role: "user",
                    content: `Ferramenta: ${toolName}\nComando: ${command}`,
                },
            ],
            model: "openai/gpt-oss-120b",
            temperature: 0.3,
            max_tokens: 200,
        });

        const explanation = completion.choices[0]?.message?.content || "Não foi possível gerar uma explicação.";

        return NextResponse.json({ explanation });
    } catch (error: any) {
        console.error("Erro na Groq API:", error);
        return NextResponse.json({
            error: "Erro ao processar explicação",
            details: error.message || String(error)
        }, { status: 500 });
    }
}
