; import React from 'react';
import HomeApp from '../HomeApp/HomeApp';
import Status from '../Status/Status';

import styles from './App.scss';

import MainLayout from '../MainLayout/MainLayout';

import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Power from '../Power/Power';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={HomeApp} />
        <Route exact path='/status' component={Power} />

      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);
export default App;