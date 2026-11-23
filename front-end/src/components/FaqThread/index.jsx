import { useEffect, useState } from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import { REPLY_DELAY } from '../../utils/replyDelay';
import { Chat } from '../Chat';
import { Message } from '../Message';
import { TypingIndicator } from '../TypingIndicator';
import { Container, Feedback } from './styles';

export function FaqThread({ faq }) {
  const [feedback, setFeedback] = useState(null);
  const [thanked, setThanked] = useState(false);

 
  useEffect(() => {
    if (feedback !== 'yes') return;

    const timer = setTimeout(() => setThanked(true), REPLY_DELAY);

    return () => clearTimeout(timer);
  }, [feedback]);

  
  const baseMessages = [
    { from: 'user', text: faq.question },
    { from: 'agent', text: faq.answer },
  ];

  if (feedback === 'no') {
    return (
      <Chat
        initialMessages={[...baseMessages, { from: 'user', text: 'Não ajudou' }]}
        delayedMessage="Poxa, que pena! Me conta qual é a sua dúvida que eu tento ajudar."
        context={`Pergunta: ${faq.question}\nResposta: ${faq.answer}`}
      />
    );
  }

  return (
    <Container>
      {baseMessages.map((message, index) => (
        <Message key={index} from={message.from}>
          {message.text}
        </Message>
      ))}

      {feedback === null && (
        <Feedback>
          <span>
            <FiThumbsUp /> Esta resposta te ajudou?
          </span>
          <button onClick={() => setFeedback('yes')}>Sim, resolveu</button>
          <button onClick={() => setFeedback('no')}>Não ajudou</button>
        </Feedback>
      )}

      {feedback === 'yes' && (
        <>
          <Message from="user">Sim, resolveu</Message>

          {thanked ? (
            <Message from="agent">
              Que bom que ajudou! Se precisar de mais alguma coisa, é só chamar.
            </Message>
          ) : (
            <Message from="agent">
              <TypingIndicator />
            </Message>
          )}
        </>
      )}
    </Container>
  );
}