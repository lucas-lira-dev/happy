import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowRight, FiSun, FiMoon } from "react-icons/fi";

import { useTheme } from '../../hooks/Themes';

import { Container, ContentWrapper, Location } from './styles';

import logoImg from '../../assets/logo.svg';

const Landing: React.FC = () => {
  const { ToggleTheme, theme } = useTheme();

  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Fortaleza</strong>
          <strong>Ceara</strong>
          <button type="button" onClick={ToggleTheme}>
            {theme.title === 'light' ? (
              <FiMoon size={40} color='#fff' /> 
            ): (
              <FiSun size={40} color='#fff' /> 
            ) }
          </button>
        </Location>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={32} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </ContentWrapper>
    </Container>
  );
}

export default Landing;