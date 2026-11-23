import { useEffect, useRef, useState } from "react";
import { FiHeadphones, FiSend } from "react-icons/fi";

import api from "../../services/api";
import { REPLY_DELAY } from "../../utils/replyDelay";
import { Message } from "../Message";
import { TypingIndicator } from "../TypingIndicator";
import { Container, Form, HumanButton, Messages } from "./styles";

export function Chat({ initialMessages = [], context, delayedMessage }) {
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(Boolean(delayedMessage));
  const [interactionId, setInteractionId] = useState(undefined);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

 
  useEffect(() => {
    if (!delayedMessage) return;

    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, { from: "agent", text: delayedMessage }]);
      setLoading(false);
    }, REPLY_DELAY);

    return () => clearTimeout(timer);
  }, [delayedMessage]);

  async function handleSubmit(event) {
    event.preventDefault();

    const message = text.trim();
    if (!message || loading) return;

    setMessages((prev) => [...prev, { from: "user", text: message }]);
    setText("");
    setLoading(true);

    try {
      const { data } = await api.post("/message", {
        message,
        previousInteractionId: interactionId,
       
        context: interactionId ? undefined : context,
      });

      setInteractionId(data.interactionId);
      setMessages((prev) => [...prev, { from: "agent", text: data.response }]);
    } catch (error) {
      console.error("Erro ao chamar a API:", error);

      const errorMessage =
        error.response?.data?.error?.message ||
        "Não foi possível falar com o assistente agora.";

      setMessages((prev) => [...prev, { from: "agent", text: errorMessage }]);
    } finally {
      setLoading(false);
    }
  }

  function handleHuman() {
    if (loading) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: "Falar com atendente" },
    ]);
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "agent",
          text: "Certo! Estou encaminhando você para um atendente. (Simulação: este projeto é fictício e não tem atendentes reais.)",
        },
      ]);
      setLoading(false);
    }, REPLY_DELAY);
  }

  return (
    <Container>
      <Messages>
        {messages.map((message, index) => (
          <Message key={index} from={message.from}>
            {message.text}
          </Message>
        ))}
        {loading && (
          <Message from="agent">
            <TypingIndicator />
          </Message>
        )}
        <div ref={endRef} />
      </Messages>

      <HumanButton type="button" onClick={handleHuman}>
        <FiHeadphones />
        Falar com atendente
      </HumanButton>

      <Form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Escreva sua dúvida..."
        />
        <button type="submit" disabled={loading} aria-label="Enviar">
          <FiSend />
        </button>
      </Form>
    </Container>
  );
}
