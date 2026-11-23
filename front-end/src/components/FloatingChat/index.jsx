import { useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

import { Chat } from "../Chat";
import { Avatar, BubbleButton, Header, Window } from "./styles";

export function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Window $open={open}>
        <Header>
          <Avatar>iB</Avatar>
          <div>
            <strong>Assistente iBluFood</strong>
            <small>Assistente virtual</small>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Fechar chat">
            <FiX />
          </button>
        </Header>
        <Chat
          initialMessages={[
            {
              from: "agent",
              text: "Oi! Eu sou o assistente do iBluFood. Como posso te ajudar?",
            },
          ]}
        />
      </Window>

      {!open && (
        <BubbleButton onClick={() => setOpen(true)} aria-label="Abrir chat">
          <FiMessageCircle />
        </BubbleButton>
      )}
    </>
  );
}
