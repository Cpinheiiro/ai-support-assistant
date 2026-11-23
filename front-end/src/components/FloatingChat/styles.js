import styled, { keyframes } from 'styled-components';

import { colors } from '../../styles/colors';

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.97); }
  to { opacity: 1; transform: none; }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(29, 78, 216, 0.5); }
  70% { box-shadow: 0 0 0 16px rgba(29, 78, 216, 0); }
  100% { box-shadow: 0 0 0 0 rgba(29, 78, 216, 0); }
`;

export const BubbleButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #2563eb, ${colors.primary});
  color: #fff;
  font-size: 1.6rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  animation: ${pulse} 2.5s infinite;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.08);
  }
`;

export const Window = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: min(380px, calc(100vw - 32px));
  height: min(520px, calc(100vh - 48px));
  background: ${colors.surface};
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.28);
  flex-direction: column;
  overflow: hidden;
  display: ${(props) => (props.$open ? 'flex' : 'none')};
  animation: ${slideUp} 0.25s ease;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark});
  color: #fff;

  strong {
    display: block;
    font-size: 0.95rem;
  }

  small {
    opacity: 0.85;
    font-size: 0.75rem;
  }

  button {
    margin-left: auto;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    display: grid;
    place-items: center;
  }
`;

export const Avatar = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 0.8rem;
`;