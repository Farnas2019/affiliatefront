import Home from "./components/landing/home";
import Notification from "./components/notifications/notification";
import Transaction from "./components/Transactions/alltransactions";
import Refer from "./components/refer/refer";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Withdrawal from "./components/withdrawal/withdrawal";


function App() {
  
  return (
    <Router>
    
      <Switch>
        <Route exact path={"/"}>
         <Home/>
        </Route>
        <Route exact path={"/notification"}>
         <Notification/>
        </Route>
        <Route exact path={"/transactions"}>
         <Transaction/>
        </Route>
        <Route exact path={"/refer"}>
         <Refer/>
        </Route>
        <Route exact path={"/withdrawal"}>
          <Withdrawal/>
        </Route>

        
      </Switch>
   </Router >
    );
}

export default App;
