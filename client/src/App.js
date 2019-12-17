import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Router path="/saved">
        <SavedList list={savedList} />
      </Router>
      <Router path="/">
        <MovieList />
      </Router>
    </div>
  );
};

export default App;
