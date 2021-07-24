import "./App.css";
import Header from "./comp/Header";
import Home from "./comp/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./comp/Checkout";
import Login from "./comp/Login";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
