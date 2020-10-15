import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import { useTheme } from './hooks/Themes';

import light from './styles/themes/light'

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanage from './pages/Orphanage';

function Routes() {
  const { theme } = useTheme();

  return(
    <ThemeProvider theme={theme ? theme : light} >
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/app' component={OrphanagesMap} />

          <Route path='/orphanages/create' exact component={CreateOrphanage} />
          <Route path='/orphanages/:id' component={Orphanage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Routes;
