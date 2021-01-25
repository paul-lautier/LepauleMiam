import React from 'react';
import Restaurant from './components/Restaurant';
import data from './data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            L'épauleMiam
          </a>
        </div>
        <div>
          <a href="/cart">panier</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.restaurant.map((restaurant) => (
              <Restaurant key={restaurant._id} restaurant={restaurant}></Restaurant>
             
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;