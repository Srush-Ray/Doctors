import React, { Fragment } from 'react';
import './Office.css';
import president from '../Images/Rectangle 204.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import illustrate from '../Images/State branch official.svg';
import {
    Route,
    Switch,
    Redirect,
    withRouter,
    BrowserRouter,
    Link,
    NavLink,
  } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
      items: 1.5,
  }
};
class Desk extends React.Component{
    constructor(props)
    { 
        super(props);
        this.state = {
            showDoctors: false,
            doctors: [
                {
                    image:president,
                    designation: "President",
                    name: "Dr. V.B. Themburnikar",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:president,
                    designation: "Gen. Secretry",
                    name:"Dr. U.S.Pandey ",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:president,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                }
            ],
            selectedDoctor: {
                image: null,
                designation: "",
                name: "",
                description:"",
            },
        }
        // this.openModel = this.openModel.bind(this);

    }
    openModel = (doctor) => {
        this.setState({ showDoctors: true });
        this.setState({ selectedDoctor: doctor });
        // console.log(event.currentTarget.dataset)
        // console.log(doctor);

    }
    closeModel = () => {
        this.setState({ showDoctors: false});        
    }
    render()
    {
        console.log(this.state.doctors);
        return(
            <div className="container">
                <hr className="hr1"/>
                <Fragment>
                    <div className="row row1">
                        <div className ="col-sm-12 col-md-6 txt" >
                            <h1>State Branch <br/>Officials</h1>
                            <p className="textPara">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare
                            </p>
                        </div>
                        <div className ="col-sm-12 col-md-6 illustration" >
                            <img src={illustrate} alt="Illustration"/>
                        </div>
                    </div>
                </Fragment>
                <Fragment>
                    <div className="row navbar">
                    <BrowserRouter>
          <div
            className="col-sm-12 nav-container"
            style={{ overflowX: "scroll", scrollbarColor: "transparent" }}
          >
            {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">*/}

            <NavLink
              to="/Gujarat"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Gujarat
            </NavLink>
            <NavLink
              to="/Haryana"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Haryana
            </NavLink>
            <NavLink
              to="/Karnataka"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Karnataka
            </NavLink>
            <NavLink
              to="/Maharashtra"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Maharashtra
            </NavLink>
            <NavLink
              to="/Punjab"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Punjab
            </NavLink>
            <NavLink
              to="/Gujarat"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Gujarat
            </NavLink>
            <NavLink
              to="/Haryana"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Haryana
            </NavLink>
            <NavLink
              to="/Karnataka"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Karnataka
            </NavLink>
            <NavLink
              to="/Maharashtra"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Maharashtra
            </NavLink>
            <NavLink
              to="/Punjab"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Punjab
            </NavLink>
            <NavLink
              to="/Gujarat"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Gujarat
            </NavLink>
            <NavLink
              to="/Haryana"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Haryana
            </NavLink>
            <NavLink
              to="/Karnataka"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Karnataka
            </NavLink>
            <NavLink
              to="/Maharashtra"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Maharashtra
            </NavLink>
            <NavLink
              to="/Punjab"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Punjab
            </NavLink>
            <NavLink
              to="/Gujarat"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Gujarat
            </NavLink>
            <NavLink
              to="/Haryana"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Haryana
            </NavLink>
            <NavLink
              to="/Karnataka"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Karnataka
            </NavLink>
            <NavLink
              to="/Maharashtra"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Maharashtra
            </NavLink>
            <NavLink
              to="/Punjab"
              className="nav-style"
              activeStyle={{ color: "black" }}
            >
              Punjab
            </NavLink>
          </div>
      {/* <Switch>
        <Route exact path="/Gujarat" component={Gujarat} />
        <Route exact path="/">
          <Redirect to="/Gujarat" />
        </Route>
        <Route exact path="/Haryana" component={} />
        <Route exact path="/Karnataka" component={} />
        <Route exact path="/Punjab" component={} />
        <Route exact path="/Maharashtra" component={} />
      </Switch> */}
    </BrowserRouter>
                    </div>
                </Fragment>

            {!this.state.showDoctors &&
               <Fragment>
               <hr className="hr2"/>
               
               <div className="row row3">  
               <div className ="col-12 col-md-3" >
                    <h2>MAHARASHTRA</h2>        
                </div> 
                <div className="col-12 col-md-9 row4" >
                    <Carousel
                        className="mobileCarousel"
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        showArrows={false}
                        ssr={false} // means to render carousel on server-side.
                        // infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        // autoPlaySpeed={1000}
                        keyBoardControl={true}
                        // customTransition="all .5"
                        // transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        itemClass="carousel-item-padding-40-px"
                    >
                    
                    {
                        this.state.doctors.map((doctor,index) =>
                        <div key={index} className="doctorContainer" onClick={e => this.openModel(doctor)}>
                        <div className="imageContainer">
                        <img src={doctor.image} alt={doctor.name} className="doctorImage" />
                        <p className="doctorDesignation">{doctor.designation}</p>
                        </div>
                        <p className="doctorName">{doctor.name}</p>
                        </div>
                        )
                    }
                    </Carousel>
                        
                </div>
                </div>
                </Fragment>
                }
                        
                </div>
                ); 
                
                
            }



}

export default Desk;