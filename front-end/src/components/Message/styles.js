import styled, { keyframes } from 'styled-components';

import { colors } from '../../styles/colors';

const appear = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  justify-content: ${(props) =>
        props.$from === 'user' ? 'flex-end' : 'flex-start'};
  animation: ${appear} 0.25s ease;
`;

export const Avatar = styled.span`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, ${colors.primary});
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 0.72rem;
  font-weight: 700;
`;

export const Bubble = styled.div`
  max-width: 78%;
  padding: 10px 14px;
  border-radius: ${(props) =>
        props.$from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};
  white-space: pre-wrap;
  line-height: 1.45;
  font-size: 0.92rem;
  background: ${(props) =>
        props.$from === 'user' ? colors.primary : colors.bubble};
  color: ${(props) => (props.$from === 'user' ? '#fff' : colors.text)};
`;