import React from 'react';

import Routes from './routes';

import { ThemesProvider } from './hooks/Themes';

const App: React.FC = () => {

  return (
    <ThemesProvider>
      <Routes />
    </ThemesProvider>
  );
}

export default App;
