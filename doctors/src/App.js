import React, { Fragment } from "react";
import logo from "./logo.svg";
// import "./App.css";
import Desk from "./Desk/Desk";
import StateBranchOfficials from "./StateBranchOfficial/StateBranchOfficial";
import Aboutus from "./AboutUs/AboutUs";
import {
  Switch,
  Route,
  withRouter,
  Link,
  NavLink,
  BrowserRouter,
  Router,
} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Covid from "./Covid/Covid";
import LifeMemberShipForm from "./Forms/LifeMembershipForm";
import Table from "./Covid/Table";
import MultiNews from "./News/MultiNews";
import News from "./News/News";
import BranchNews from "./BranchNews/BranchNews";
import CentralNews from "./CentralNews/CentralNews";
import AllNews from "./CentralNews/AllNews";
import Folders from "./Gallery/Folders";
function App() {
  return (
    <div className="App">
      {/*
      <Desk />
      <Covid />
      <StateBranchOfficials/>
      <Aboutus/>
    */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/Doctors" component={HomePage} exact />
          <Route path="/aboutUs" component={Aboutus} />
          <Route path="/desk" component={Desk} />
          <Route
            path="/statebranchofficials"
            component={StateBranchOfficials}
          />
          <Route path="/covid" component={Covid} />
          <Route path="/lifeMembershipForm" component={LifeMemberShipForm} />
          <Route path="/centralnews" component={CentralNews} />
          <Route path="/allnews" component={AllNews} />

          <Route path="/gallery" component={Folders} />

          <Route path="/branchNews" component={BranchNews} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
