import "./App.css";
import Header from "./comp/Header";
import Home from "./comp/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./comp/Checkout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
