import { GoogleGenAI } from '@google/genai';
import { AppError } from '../errors/AppError.js';
import { supportPrompt } from '../prompts/supportPrompt.js';

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
        timeout: 60000,
    },
});

function toAppError(error) {
    const status = error?.status;

    // 503 = modelo sobrecarregado, 429 = limite de uso: temporário, vale tentar de novo
    if (status === 503 || status === 429) {
        return new AppError(
            'The AI service is temporarily unavailable. Please try again in a moment.',
            { statusCode: 503, code: 'AI_SERVICE_UNAVAILABLE', cause: error },
        );
    }

    // qualquer outra falha na chamada externa = 502 (Bad Gateway)
    return new AppError('The AI service returned an error.', {
        statusCode: 502,
        code: 'AI_SERVICE_ERROR',
        cause: error,
    });
}

export async function processMessage(message) {
    try {
        console.log('A - Iniciando chamada ao Gemini');

        const interaction = await ai.interactions.create({
            model: process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite',
            input: message,
            system_instruction: supportPrompt
        });

        console.log('B - Gemini respondeu');

        return {
            response: interaction.output_text,
        };
    } catch (error) {
        throw toAppError(error);
    }
}