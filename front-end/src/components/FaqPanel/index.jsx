import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

import { categories, faqs } from "../../data/faqs";
import { faqIcons } from "../../utils/faqIcons";
import { FaqThread } from "../FaqThread";
import {
  Avatar,
  CategoryButton,
  Categories,
  ChatHeader,
  Container,
  Content,
  EmptyText,
  IconCircle,
  Item,
  ItemText,
  Main,
  Placeholder,
  Sidebar,
} from "./styles";

export function FaqPanel({ search }) {
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState("Todos");

  const term = search.trim().toLowerCase();

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = category === "Todos" || faq.category === category;
    const matchesSearch =
      !term ||
      faq.question.toLowerCase().includes(term) ||
      faq.answer.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });

  return (
    <Container>
      <Sidebar>
        <h2>Tópicos frequentes</h2>
        <p>Selecione para ver a solução completa</p>

        <Categories>
          {categories.map((name) => (
            <CategoryButton
              key={name}
              $active={category === name}
              onClick={() => setCategory(name)}
            >
              {name}
            </CategoryButton>
          ))}
        </Categories>

        {filteredFaqs.length === 0 && (
          <EmptyText>Nenhuma pergunta encontrada para essa busca.</EmptyText>
        )}

        {filteredFaqs.map((faq) => {
          const Icon = faqIcons[faq.icon];

          return (
            <Item
              key={faq.id}
              $active={selected?.id === faq.id}
              onClick={() => setSelected(faq)}
            >
              <IconCircle>
                <Icon />
              </IconCircle>
              <ItemText>
                <strong>{faq.question}</strong>
                <small>{faq.category}</small>
              </ItemText>
              <FiChevronRight />
            </Item>
          );
        })}
      </Sidebar>

      <Main>
        <ChatHeader>
          <Avatar>iB</Avatar>
          <div>
            <strong>Atendimento virtual iBluFood</strong>
            <small>Assistente virtual</small>
          </div>
        </ChatHeader>

        <Content>
          {selected ? (
            <FaqThread key={selected.id} faq={selected} />
          ) : (
            <Placeholder>
              Escolha uma pergunta ao lado para ver a resposta.
            </Placeholder>
          )}
        </Content>
      </Main>
    </Container>
  );
}
