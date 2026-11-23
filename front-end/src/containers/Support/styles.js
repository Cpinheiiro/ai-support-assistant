import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 32px;
  background: ${colors.surface};
  border-bottom: 1px solid ${colors.border};

  p {
    margin: 0;
    font-weight: 600;
    color: ${colors.muted};
  }
`;

export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${colors.primary};

  span {
    color: ${colors.accent};
  }
`;

export const Main = styled.main`
  max-width: 1160px;
  margin: 0 auto;
  padding: 32px 16px 48px;
`;

export const Hero = styled.section`
  text-align: center;
  padding: 40px 24px;
  margin-bottom: 24px;
  border-radius: 24px;
  background: linear-gradient(180deg, ${colors.primarySoft}, ${colors.bg});

  h1 {
    margin: 14px 0 8px;
    font-size: clamp(1.7rem, 4vw, 2.6rem);
    font-weight: 800;
  }

  p {
    margin: 0 0 24px;
    color: ${colors.muted};
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 5px 14px;
  border-radius: 999px;
  background: ${colors.accentLight};
  color: #9a3412;
  font-size: 0.75rem;
  font-weight: 700;
`;

export const SearchBox = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 620px;
  margin: 0 auto;
  padding: 14px 20px;
  border-radius: 999px;
  background: ${colors.surface};
  box-shadow: 0 6px 24px rgba(29, 78, 216, 0.12);
  color: ${colors.muted};
  font-size: 1.1rem;

  input {
    flex: 1;
    border: none;
    outline: none;
    background: none;
    font-size: 0.95rem;
    color: ${colors.text};
  }
`;

export const Popular = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
  font-size: 0.82rem;
  color: ${colors.muted};

  button {
    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid ${colors.border};
    background: ${colors.surface};
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.2s;
  }

  button:hover {
    background: ${colors.primary};
    border-color: ${colors.primary};
    color: #fff;
  }
`;

export const Footer = styled.footer`
  padding: 24px 32px;
  text-align: center;
  font-size: 0.82rem;
  color: ${colors.muted};
  background: ${colors.primarySoft};
`;