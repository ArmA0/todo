import React, {useEffect} from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import Todos from './Components/Pages/Todos';
import { getTodos } from './store/actions/todoActions';
import { clearError } from './store/slices/todoSlice';

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearError())
    dispatch(getTodos())
  }, [])
  
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
