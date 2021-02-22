import React, { Fragment } from "react";

// import StateBranchOfficials from './StateBranchOfficial/StateBranchOfficial';
// import Covid from './Covid/Covid';
// import Aboutus from "./AboutUs/AboutUs";

import {
  Switch,
  Route,
  withRouter,
  Link,
  NavLink,
  BrowserRouter,
  Router,
} from "react-router-dom";

function HomePage() {
  return (
    <nav className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-2 col-12">
          <button type="button" className="btn btn-light HomePage__Btn">
            <Link to="/desk" className="HomePage__link">
              Desk
            </Link>
          </button>
        </div>
        {/*   <div className="col-md-2 col-12">
          <button type="button" className="btn btn-light HomePage__Btn">
            <Link to="/aboutUs">About Us</Link>
          </button>
        </div> */}
        {/*  <div className="col-md-3 col-12">
          <button type="button" className="btn btn-light HomePage__Btn">
            <Link to="/statebranchofficials" className="HomePage__link">
              State Branch Officials
            </Link>
          </button>
        </div> */}
        {/* <div className="col-md-2 col-12">
          <button type="button" className="btn btn-light HomePage__Btn">
            <Link to="/covid" className="HomePage__link">
              Covid
            </Link>
          </button>
        </div>
      */}
        <div className="col-md-2 col-12">
          <button type="button" className="btn btn-light HomePage__Btn">
            <Link to="/branchNews" className="HomePage__link">
              Branch News
            </Link>
          </button>
        </div>
        <div className="col-md-3 col-12">
          <button type="button" className="btn btn-light HomePage__Btn">
            <Link to="/centralnews" className="HomePage__link">
              Central News
            </Link>
          </button>
        </div>
        {/* <div className="col-md-2 col-12">
          <button type="button" className="btn btn-light HomePage__Btn">
            <Link to="/covid" className="HomePage__link">
              Covid
            </Link>
          </button>
        </div> */}
        {/* <div className="col-md-3 col-12">
          <button type="button" className="btn btn-light HomePage__Btn">
            <Link to="/gallery" className="HomePage__link">
              Gallery
            </Link>
          </button>
        </div> */}
      </div>
    </nav>
  );
}

export default HomePage;
