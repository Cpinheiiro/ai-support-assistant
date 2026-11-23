import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
`;

export const Feedback = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: 40px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    color: ${colors.primary};
  }

  button {
    padding: 7px 16px;
    border-radius: 999px;
    border: 1px solid ${colors.border};
    background: ${colors.surface};
    color: ${colors.text};
    font-size: 0.82rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background: ${colors.primary};
    border-color: ${colors.primary};
    color: #fff;
  }
`;