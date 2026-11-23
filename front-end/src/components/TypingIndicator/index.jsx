import { Dot, Container } from "./styles";

export function TypingIndicator() {
  return (
    <Container aria-label="Digitando">
      <Dot $delay="0s" />
      <Dot $delay="0.15s" />
      <Dot $delay="0.3s" />
    </Container>
  );
}
