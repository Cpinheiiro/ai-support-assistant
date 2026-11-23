import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

export const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HumanButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0 16px 10px;
  align-self: flex-start;
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid ${colors.primary};
  background: ${colors.surface};
  color: ${colors.primary};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${colors.primaryLight};
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid ${colors.border};

  input {
    flex: 1;
    padding: 11px 16px;
    border: none;
    border-radius: 999px;
    background: #f1f5f9;
    font-size: 0.92rem;
  }

  input:focus {
    outline: 2px solid ${colors.primary};
  }

  button {
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50%;
    background: ${colors.primary};
    color: #fff;
    display: grid;
    place-items: center;
    font-size: 1.05rem;
    cursor: pointer;
    transition: transform 0.15s, background 0.2s;
  }

  button:hover:not(:disabled) {
    background: ${colors.primaryDark};
    transform: scale(1.05);
  }

  button:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;