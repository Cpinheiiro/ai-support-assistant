import * as Yup from 'yup';
import { AppError } from '../errors/AppError.js';

export function errorHandler(error, req, res, next) {
    // se a resposta já começou a ser enviada, deixa o Express lidar
    if (res.headersSent) {
        return next(error);
    }

    // 1) erro de validação do Yup -> 400
    if (error instanceof Yup.ValidationError) {
        return res.status(400).json({
            error: {
                code: 'VALIDATION_ERROR',
                message: 'Invalid request data.',
                details: error.errors,
            },
        });
    }

    // 2) JSON malformado no corpo da requisição -> 400
    if (error.type === 'entity.parse.failed') {
        return res.status(400).json({
            error: {
                code: 'INVALID_JSON',
                message: 'Request body is not valid JSON.',
            },
        });
    }

    // 3) erros que nós mesmos criamos (ex.: falha no Gemini)
    if (error instanceof AppError) {
        console.error(`[${error.code}] ${error.message}`);
        console.error('Status original:', error.cause?.status);
        console.error('Erro original:', error.cause);

        return res.status(error.statusCode).json({
            error: {
                code: error.code,
                message: error.message,
            },
        });
    }

    // 4) qualquer outra coisa inesperada -> 500 genérico
    console.error('Unexpected error:', error);

    return res.status(500).json({
        error: {
            code: 'INTERNAL_ERROR',
            message: 'Internal server error.',
        },
    });
}