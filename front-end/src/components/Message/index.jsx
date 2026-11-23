import { Avatar, Bubble, Container } from "./styles";

export function Message({ from, children }) {
  return (
    <Container $from={from}>
      {from === "agent" && <Avatar>iB</Avatar>}
      <Bubble $from={from}>{children}</Bubble>
    </Container>
  );
}
