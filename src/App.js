import React from 'react';
import './App.css';
import Nav from './components/Nav';

import { RecipeProvider } from './context/RecipeContext';
import Home from './pages/Home';

function App() {






  return (
    <RecipeProvider>
      <div className='App'>
        <Nav />
        <Home />
      </div>
    </RecipeProvider>
  );
}

export default App;
