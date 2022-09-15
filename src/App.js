import React from 'react';
import './App.css';


import { RecipeProvider } from './context/RecipeContext';
import Home from './pages/Home';

function App() {






  return (
    <RecipeProvider>
      <div className='App'>

        <Home />
      </div>
    </RecipeProvider>
  );
}

export default App;
