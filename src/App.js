import React from 'react'
import MovieList from "./MovieList"
import Add from './Add'
import Navbar from './Navbar'
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Add />
      <MovieList />
    </div>
  );
}

export default App;
