import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/movies/:id" render={props => <Movie {...props} />} />
      <Route exact path="/" component={MovieList} />
    </div>
  );
};

export default App;

// TK

/* <Route 
  path="/avengers/:id" 
  render={props => <AvengerPage {...props} avengers={avengerData} /> } />
<Route 
  path="/avengers" 
  render={props => <AvengerList {...props} avengers={avengerData} />} 
/> */

// Christina's codepen

// /* <Route path="/item-list" component={ItemList} /> */}
//       {/* <Route
//         exact
//         path="/item-list"
//         render={(props) => (
//           <ItemsList
//             {...props} // this is the same as below
//             // match={props.match}
//             // history={props.history}
//             // location={props.location}
//             items={product}
//           />
//         )}
