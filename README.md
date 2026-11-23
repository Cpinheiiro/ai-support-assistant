# AI Support Assistant — iBluFood

Uma central de ajuda com um assistente de IA para uma empresa fictícia de delivery, a iBluFood.

Eu fiz este projeto para aprender a integrar um modelo de linguagem em uma aplicação real. Construí a API, o tratamento de erros e a interface do começo ao fim.

> A iBluFood é fictícia. Não existe app, pedido ou atendente de verdade. Ela é só o cenário do projeto.

## O que ele faz

- Mostra uma central de ajuda com perguntas frequentes e respostas prontas.
- Pergunta se a resposta ajudou. Se a pessoa clica em "Não ajudou", a conversa continua com a IA, que já sabe qual pergunta ela estava lendo.
- Tem um chat flutuante para quem não encontrou a dúvida na lista.
- A IA lembra do que foi dito durante a conversa.
- Tem busca e filtro por categoria nas perguntas.
- O atendente humano é simulado: o botão "Falar com atendente" só mostra uma mensagem de encaminhamento.

## Como o atendimento funciona

1. A pessoa escolhe uma pergunta frequente e vê a resposta pronta (texto fixo, sem IA).
2. Se a resposta não ajudou, a IA assume a conversa.
3. Se a IA não resolve, ela orienta a usar o botão de atendente humano.

Resposta pronta é instantânea e não gasta chamada de IA. A IA fica só com os casos que a lista não cobre.

## Tecnologias

**Back-end**

- Node.js com Express (ES Modules)
- Google Gemini, pelo pacote `@google/genai` (Interactions API)
- Yup para validação
- dotenv e CORS
- pnpm

**Front-end**

- React com Vite
- styled-components
- Axios
- react-icons
- Yarn

## Estrutura

```text
ai-support-assistant/
├── back-end/
│   ├── src/
│   │   ├── server.js
│   │   ├── app.js
│   │   ├── routes.js
│   │   └── app/
│   │       ├── controllers/   recebem a requisição e respondem
│   │       ├── services/      conversam com o Gemini
│   │       ├── schemas/       validação com Yup
│   │       ├── middlewares/   tratamento de erros
│   │       ├── errors/        AppError
│   │       └── prompts/       instruções do assistente
│   ├── .env.example
│   └── package.json
├── front-end/
│   └── src/
│       ├── components/
│       ├── containers/
│       ├── services/
│       ├── data/
│       ├── styles/
│       └── utils/
└── README.md
```

Cada camada tem uma função. O controller não conhece o Gemini e o service não conhece HTTP. Isso deixa fácil trocar o modelo ou o provedor de IA mexendo só em um arquivo.

## Como rodar

Precisa de Node.js, pnpm e Yarn instalados, e de uma chave da API do Gemini.

**1. Back-end**

```bash
cd back-end
pnpm install
cp .env.example .env
```

Abra o `.env` e coloque a sua chave:

```text
GEMINI_API_KEY=sua_chave_aqui
GEMINI_MODEL=gemini-3.5-flash-lite
```

Depois rode o servidor (o script está no `package.json`):

```bash
pnpm dev
```

Ele sobe em `http://localhost:3000`.

**2. Front-end**

```bash
cd front-end
yarn
yarn dev
```

Abra `http://localhost:5173`.

## Variáveis de ambiente

| Variável         | Para que serve                                               |
| ---------------- | ------------------------------------------------------------ |
| `GEMINI_API_KEY` | Chave da API do Gemini. Nunca vai para o GitHub.             |
| `GEMINI_MODEL`   | Modelo usado. Se faltar, o padrão é `gemini-3.5-flash-lite`. |

## API

### `POST /message`

```json
{
  "message": "Quais formas de pagamento vocês aceitam?",
  "previousInteractionId": "opcional, id devolvido na resposta anterior",
  "context": "opcional, pergunta e resposta da FAQ que a pessoa estava lendo"
}
```

Resposta:

```json
{
  "response": "Aqui no iBluFood você pode pagar com cartão, Pix ou dinheiro na entrega.",
  "interactionId": "id para continuar a conversa"
}
```

Erros:

| Status | Código                   | Quando acontece                        |
| ------ | ------------------------ | -------------------------------------- |
| 400    | `VALIDATION_ERROR`       | Mensagem vazia ou campos inválidos     |
| 400    | `INVALID_JSON`           | Corpo da requisição com JSON quebrado  |
| 502    | `AI_SERVICE_ERROR`       | O serviço de IA devolveu um erro       |
| 503    | `AI_SERVICE_UNAVAILABLE` | Modelo sobrecarregado ou limite de uso |
| 500    | `INTERNAL_ERROR`         | Erro inesperado                        |

O cliente recebe só uma mensagem simples. O detalhe técnico do erro fica no log do servidor.

## Decisões que tomei

- **Erros em um lugar só.** Service e controller lançam o erro e um middleware decide a resposta. Assim as respostas de erro ficam sempre no mesmo formato.
- **`AppError` com `cause`.** Guarda o erro original para o log sem mostrar para o cliente.
- **Prompt em arquivo separado.** Para mudar o comportamento do assistente, eu edito um arquivo de texto.
- **Modelo na variável de ambiente.** Trocar de modelo não exige mexer no código.
- **Regras claras no prompt.** O assistente não tem acesso a pedidos, não promete reembolso, não pede dados sensíveis e não inventa canais de atendimento.

## O que aprendi com o Gemini

Durante o desenvolvimento, o modelo `gemini-3.8-flash` passou a responder com erro 503 (alta demanda) por mais de um dia.

Eu precisava saber se o problema era meu código ou do serviço. Fiz assim:

1. Confirmei que a chave e o `.env` estavam certos.
2. Fiz uma requisição autenticada para listar os modelos e recebi 200.
3. Chamei a geração direto com `fetch`, sem passar pelo Express, e o 503 continuou.
4. Concluí que o problema era a disponibilidade daquele modelo, não o meu backend.
5. Troquei para o `gemini-3.5-flash-lite` e a integração funcionou.

Isso também me levou a colocar o modelo em uma variável de ambiente.

## Limitações

- O atendente humano é simulado.
- A IA pode errar mesmo com as regras no prompt. Eu testei com mensagens de pedido, reembolso, pedido de telefone e tentativa de enganar o assistente, e fui ajustando o prompt. Isso reduz o risco, mas não elimina.
- Os testes foram manuais, pelo Insomnia e pela interface. Ainda não tenho testes automatizados.
- O contexto da FAQ vem do front-end. Numa versão real, o back-end deveria buscar o texto pelo id da pergunta.
- Por padrão, a API do Gemini guarda as interações. Aqui os dados são fictícios, mas num produto real isso precisaria de atenção.

## Próximos passos

- Testes automatizados da validação e do tratamento de erros.
- Pedido fictício que a IA usa como contexto na conversa.
- Login e cadastro com banco de dados.
- Deploy.

## Autor

Cauê Pinheiro — [@Cpinheiiro](https://github.com/Cpinheiiro)
