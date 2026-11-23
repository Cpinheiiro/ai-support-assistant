import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 360px 1fr;
  height: 640px;
  background: ${colors.surface};
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(29, 78, 216, 0.1);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const Sidebar = styled.aside`
  padding: 24px 20px;
  border-right: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;

  h2 {
    margin: 0;
    font-size: 1.15rem;
  }

  p {
    margin: 0 0 8px;
    font-size: 0.85rem;
    color: ${colors.muted};
  }

  @media (max-width: 860px) {
    border-right: none;
    border-bottom: 1px solid ${colors.border};
    max-height: 420px;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
`;

export const CategoryButton = styled.button`
  padding: 6px 14px;
  border-radius: 999px;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  background: ${(props) => (props.$active ? colors.primary : colors.primarySoft)};
  color: ${(props) => (props.$active ? '#fff' : colors.text)};
  transition: background 0.2s;
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 16px;
  border: 2px solid ${(props) => (props.$active ? colors.primary : 'transparent')};
  background: ${(props) => (props.$active ? colors.primarySoft : 'transparent')};
  text-align: left;
  cursor: pointer;
  color: ${colors.text};
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: ${colors.primarySoft};
    transform: translateX(3px);
  }

  > svg {
    margin-left: auto;
    flex-shrink: 0;
    color: ${colors.muted};
  }
`;

export const IconCircle = styled.span`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${colors.primaryLight};
  color: ${colors.primary};
  display: grid;
  place-items: center;
  font-size: 1.15rem;
`;

export const ItemText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    font-size: 0.92rem;
  }

  small {
    color: ${colors.muted};
    font-size: 0.78rem;
  }
`;

export const EmptyText = styled.p`
  color: ${colors.muted};
  font-size: 0.9rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;

  @media (max-width: 860px) {
    min-height: 460px;
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 24px;
  border-bottom: 1px solid ${colors.border};

  strong {
    display: block;
    font-size: 1rem;
  }

  small {
    color: ${colors.muted};
    font-size: 0.8rem;
  }
`;

export const Avatar = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, ${colors.primary});
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 0.85rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const Placeholder = styled.p`
  margin: auto;
  padding: 24px;
  text-align: center;
  color: ${colors.muted};
`;