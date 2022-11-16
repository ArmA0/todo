import React, {useEffect} from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { getTodos } from './store/actions/todoActions';

function App() {

  useEffect(() => {
    useAppDispatch(getTodos())
  }, [])
  return (
    <div className="App">
      Hellow
    </div>
  );
}

export default App;
