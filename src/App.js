import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import Header from "./Components/Header";
import "./App.css";
import ProductDetails from "./Components/ProductDetails";
import CheckOutpage from"./Components/CheckOutpage"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/checkOutpage" exact component={CheckOutpage} />
          {/* <Route>
          <CheckOutpage/>
          </Route> */}
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
