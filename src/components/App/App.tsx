import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { decrement, increment } from '../../services/reducers/testSlice';

function App() {
  const count = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => dispatch(increment())}>Ставка +</button>
        <button type="button" onClick={() => dispatch(decrement())}>Ставка -</button>
      </header>
      <p>{count}</p>
    </div>
  );
}

export default App;
