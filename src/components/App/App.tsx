import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../Header/Header';
import OverviewPage from '../../pages/overview/overview';
import CreatePage from '../../pages/create/create';
import PlayersPage from '../../pages/players/players';

function App() : JSX.Element | null {
  return (
    <div className={styles.page}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route index element={<OverviewPage />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
