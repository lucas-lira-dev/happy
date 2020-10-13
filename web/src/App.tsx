import React from 'react';

import { ThemesProvider } from './hooks/Themes';

import Routes from './routes';

const App: React.FC = () => {

  return (
    <ThemesProvider>
      <Routes />
    </ThemesProvider>
  );
}

export default App;
