import * as Yup from 'yup';
import { processMessage } from '../services/messageService.js';

export async function messageReturn(req, res, next) {
    console.log('1 - Controller iniciado');

    const schema = Yup.object({
        message: Yup.string().trim().required(),
    });

    try {
        const validatedData = await schema.validate(req.body, {
            abortEarly: false,
            strict: true,
        });

        const { message } = validatedData;

        console.log('2 - Chamando o serviço de IA');

        const resultado = await processMessage(message);

        console.log('3 - Resposta recebida do serviço de IA');

        return res.status(200).json(resultado);
    } catch (error) {
        return next(error);
    }
}