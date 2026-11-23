import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { FaqPanel } from "../../components/FaqPanel";
import { FloatingChat } from "../../components/FloatingChat";
import {
  Badge,
  Footer,
  Header,
  Hero,
  Logo,
  Main,
  Popular,
  SearchBox,
} from "./styles";

const popularTerms = ["pagamento", "cancelar", "reembolso"];

export function Support() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header>
        <Logo>
          iBluFood<span>.</span>
        </Logo>
        <p>Central de ajuda</p>
      </Header>

      <Main>
        <Hero>
          <Badge>Projeto fictício de estudo</Badge>
          <h1>Como podemos te ajudar hoje?</h1>
          <p>
            Encontre respostas sobre pedidos, pagamentos e entregas do iBluFood.
          </p>

          <SearchBox>
            <FiSearch />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Busque por dúvidas (ex.: pagamento, cancelar...)"
            />
          </SearchBox>

          <Popular>
            <span>Mais buscados:</span>
            {popularTerms.map((term) => (
              <button key={term} onClick={() => setSearch(term)}>
                {term}
              </button>
            ))}
          </Popular>
        </Hero>

        <FaqPanel search={search} />
      </Main>

      <Footer>
        <span>© iBluFood · Projeto fictício criado para fins de estudo.</span>
      </Footer>

      <FloatingChat />
    </>
  );
}
