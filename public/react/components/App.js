import React, { useState } from 'react';
import {LandingPage} from './LandingPage'
import {Stock} from './Stock'
import {AddNewStock} from './AddNewStock'
import {ProductVolume} from './ProductVolume'
import {Search} from './Search'
 
export const App = () => {
  const [page, setPage] = useState("/");
 
  function changePage(page) {
    setPage(page);
  }
 
  let view;
 
  if (page === "/") {
    view = <LandingPage changePage={changePage} />
  } else if (page === "/stock") {
    view = <Stock changePage={changePage} />
} else if (page === "/AddNewStock") {
    view = <AddNewStock changePage={changePage} />
} else if (page === "/ProductVolume") {
    view = <ProductVolume changePage={changePage} />
} else if (page === "/Search") {
    view = <Search changePage={changePage} />
  }
 
  return (
<>
      {view}
	  <div className="navbar">
<button onClick={() => changePage("/")}>Home</button>
<button onClick={() => changePage("/stock")}>Stock</button>
<button onClick={() => changePage("/Search")}>Search</button>
<button onClick={() => changePage("/ProductVolume")}>Product Volume</button>
<button onClick={() => changePage("/AddNewStock")}>Add New Stock</button>
</div>
</>
  );
};
 