import React, {useEffect} from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import Todos from './Components/Pages/Todos';
import { getTodos } from './store/actions/todoActions';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [])
  
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
