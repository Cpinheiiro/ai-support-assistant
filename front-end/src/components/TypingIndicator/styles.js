import styled, { keyframes } from 'styled-components';

import { colors } from '../../styles/colors';

const bounce = keyframes`
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-5px); opacity: 1; }
`;

export const Container = styled.div`
  display: flex;
  gap: 5px;
  padding: 4px 2px;
`;

export const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${colors.muted};
  animation: ${bounce} 1s infinite;
  animation-delay: ${(props) => props.$delay};
`;