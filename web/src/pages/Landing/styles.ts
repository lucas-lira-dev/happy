import styled from 'styled-components';

import landing from '../../assets/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, var(--bg-linear-primary) 0%, var(--bg-linear-secondary) 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landing}) no-repeat 80% center;

  .enter-app {
    position: absolute;
    bottom: 0;
    right: 0;

    width: 80px;
    height: 80px;
    background: var(--bg-secondary);
    border-radius: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background: var(--bg-button_hover_light);
    }
  }

  main {
    max-width: 350px;

    h1 {
      font-size: 76px;
      font-weight: 800;
      line-height: 78px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items:justify-content;
  flex-direction: column;

  font-size: 24px;
  line-height: 34px;
  text-align: right;

  strong {
    font-weight: 800;
  }

  > button {
    margin-left: 100px;
    border: 0px solid transparent !important;
    background: none;
    color: none !important;

    &:active {
      border: 0px solid transparent !important;
      box-shadow: none;
    }
  }
`;
