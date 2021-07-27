import "./App.css";
import Header from "./comp/Header";
import Home from "./comp/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./comp/Checkout";
import Login from "./comp/Login";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./comp/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./comp/Orders";
const promise = loadStripe(
  "pk_test_51J2V4SSICqf3Ddj6Dg2Zz4zmhHlhmkhDq64h4PBtRungZ0MOL3mRX6UXempdilkVvQ65eqldeIEGMfP1HcefG4KX00UvvoKJtD"
);
const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`User : ${authUser}`);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
