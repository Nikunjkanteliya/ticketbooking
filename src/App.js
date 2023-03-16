import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Kantara from "./components/Kantara";
import Pathan from "./components/Pathan";
import Fastandfurious from "./components/Fastandfurious";
import Leo from "./components/Leo";
import Ui from "./components/Ui";
import Bookedtickets from "./Bookedtickets";
import Uipathan from "./components/Uipathan";
import Uileo from "./components/Uileo";
import Uifaf from "./components/Uifaf";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/kantara"}>
            <Kantara />
          </Route>
          <Route path={"/pathan"}>
            <Pathan />
          </Route>
          <Route path={"/fastandfurious"}>
            <Fastandfurious />
          </Route>
          <Route path={"/Leo"}>
            <Leo />
          </Route>
          <Route path={"/Ui"} exact>
            <Ui/>
          </Route>
          <Route path={"/Uipathan"} exact>
            <Uipathan/>
          </Route>
          <Route path={"/Uileo"}>
            <Uileo/>
          </Route>
          <Route path={"/Uifaf"}>
            <Uifaf/>
          </Route>
          <Route path={"/booked"}>
            <Bookedtickets/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
