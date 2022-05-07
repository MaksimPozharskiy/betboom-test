import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { decrement, increment } from '../../services/reducers/testSlice';
import Header from '../Header/Header';
import OverviewPage from '../../pages/overview/overview';
import CreatePage from '../../pages/create/create';
import PlayersPage from '../../pages/players/players';

function App() {
  const count = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.page}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route index element={<OverviewPage />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <button type="button" onClick={() => dispatch(increment())}>Ставка +</button>
        <button type="button" onClick={() => dispatch(decrement())}>Ставка -</button>
      </header>
      <p>{count}</p>
    </div>
  );
}

export default App;
