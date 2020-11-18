import React, { Fragment } from "react";
import styles from "./Desk.css";
import president from "../Images/Rectangle 204.png";
import arrow from "../Images/bi_arrow-right.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cross from "../Images/Vector.svg";
import { MdMenu } from "react-icons/md";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};
class Desk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDoctors: false,
      doctors: [
        {
          image: president,
          designation: "President",
          name: "Dr. V.B. Themburnikar",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis.  Nunc tincidunt ante vitae erat facilisis lobortis. Nunc tincidunt ante vitae erat facilisis lobortis. Nunc tincidunt ante vitae erat facilisis lobortis. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
        },
        {
          image: president,
          designation: "General Secretry",
          name: "Dr. U.S.Pandey ",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
        },
        {
          image: president,
          designation: "Treasurer",
          name: "Dr. Ashutosh Kulakrni",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
        },
      ],
      selectedDoctor: {
        image: null,
        designation: "",
        name: "",
        description: "",
      },
    };
    // this.openModel = this.openModel.bind(this);
  }
  openModel = (doctor) => {
    this.setState({ showDoctors: true });
    this.setState({ selectedDoctor: doctor });
    // console.log(event.currentTarget.dataset)
    // console.log(doctor);
  };
  closeModel = () => {
    this.setState({ showDoctors: false });
  };
  render() {
    console.log(this.state.doctors);
    return (
      <div className="Desk__main">
        {!this.state.showDoctors && (
          <Fragment>
            <div className="Desk__row Desk__linkDesktop h-100 row align-items-center">
              {/* <div className="col-12">
                <hr className="Desk__hr" />
        </div>*/}
              <div className="col-6 col-md-6">
                <h1 className="Desk__h1 Desk__margin">Desk</h1>
                <p className="Desk__textPara Desk__margin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aut
                </p>

                <span className="Desk__margin Desk__link">
                  <a href="#">
                    {" "}
                    <span className="Desk__link"> Click to know more</span>
                    <img
                      src={arrow}
                      alt="Right Arrow"
                      style={{ marginLeft: "1rem" }}
                    />
                  </a>
                </span>
              </div>
              <div className="col-6 pr-0">
                <Carousel
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
                  removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  itemClass="carousel-item-padding-40-px"
                >
                  {this.state.doctors.map((doctor, index) => (
                    <div
                      key={index}
                      className="Desk__doctorContainer"
                      onClick={(e) => this.openModel(doctor)}
                    >
                      <div className="Desk__imageContainer">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="Desk__doctorImage"
                        />
                        <p className="Desk__doctorDesignation">
                          {doctor.designation}
                        </p>
                      </div>
                      <p className="Desk__doctorName">{doctor.name}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className="Desk__linkMobile">
              <div className="Desk__row h-100 row align-items-center">
                <div className="mt-3">
                  <MdMenu size={32} className="Desk__buttonNav" />
                </div>
                <div style={{ marginTop: "30px" }}>
                  <h1 className="Desk__h1 Desk__margin">Desk</h1>
                  <p className="Desk__textPara Desk__margin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aut
                  </p>
                </div>
                <div className="col-12 m-0 p-0">
                  <Carousel
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
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    itemClass="carousel-item-padding-40-px"
                  >
                    {this.state.doctors.map((doctor, index) => (
                      <div
                        key={index}
                        className="Desk__doctorContainer"
                        onClick={(e) => this.openModel(doctor)}
                      >
                        <div className="Desk__imageContainer">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="Desk__doctorImage"
                          />
                          <p className="Desk__doctorDesignation">
                            {doctor.designation}
                          </p>
                        </div>
                        <p className="Desk__doctorName">{doctor.name}</p>
                      </div>
                    ))}
                  </Carousel>

                  <div className="Desk__mobileMargin mb-3">
                    <a href="#">
                      <span
                        style={{
                          color: "#51B239",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                        className="Desk__link"
                      >
                        {" "}
                        Click to know more
                      </span>
                    </a>
                    <img
                      src={arrow}
                      alt="Right Arrow"
                      style={{ marginLeft: "1rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
        {this.state.showDoctors && (
          //   <Doctor />
          <Fragment>
            <div className="Desk__linkDesktop Desk__container container">
              <div className="row h-100 Desk__row align-items-center">
                <div className="col-md-6">
                  <button type="btn" className="Desk__closeButton Desk__button">
                    <img src={cross} alt="close" onClick={this.closeModel} />
                  </button>
                  <h1 className="Desk__h1" style={{ marginTop: "108px" }}>
                    {this.state.selectedDoctor.designation}
                  </h1>
                  <p
                    className="Desk__doctorName"
                    style={{ lineHeight: "1rem" }}
                  >
                    {this.state.selectedDoctor.name}
                  </p>
                  <p className="Desk__selectedDoctorDescription">
                    {this.state.selectedDoctor.description}
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src={this.state.selectedDoctor.image}
                    alt={this.state.selectedDoctor.name}
                    className="Desk__selectedDoctorImage"
                  />
                  <p className="Desk__selectedDoctorDesignation">
                    {this.state.selectedDoctor.designation}
                  </p>
                </div>
              </div>
            </div>
            <div className="Desk__linkMobile">
              <div
                className="row Desk__row align-items-center"
                style={{ margin: "1.7rem" }}
              >
                <div className="col-12" style={{ padding: 0 }}>
                  <div
                    className="row align-items-center"
                    style={{ padding: "0", margin: "0" }}
                  >
                    <div
                      className="col-8"
                      style={{ padding: "0", margin: "0" }}
                    >
                      <h1 className="Desk__h1Mobile">
                        {this.state.selectedDoctor.designation}
                      </h1>
                    </div>
                    <div
                      className="col-4"
                      // style={{ padding: "0", margin: "0" }}
                    >
                      <button
                        type="btn"
                        className="Desk__closeButton Desk__button"
                        style={{ float: "right" }}
                      >
                        <img
                          src={cross}
                          alt="close"
                          onClick={this.closeModel}
                          height="18px"
                          width="18px"
                        />
                      </button>
                    </div>
                  </div>
                  <p
                    className="Desk__doctorName"
                    style={{ lineHeight: "1rem" }}
                  >
                    {this.state.selectedDoctor.name}
                  </p>
                  <div style={{ marginLeft: "0.1rem" }}>
                    <img
                      src={this.state.selectedDoctor.image}
                      alt={this.state.selectedDoctor.name}
                      className="Desk__selectedDoctorImage"
                    />
                    <p className="Desk__selectedDoctorDesignation">
                      {this.state.selectedDoctor.designation}
                    </p>
                  </div>
                </div>
                <div
                  className="col-12"
                  style={{ padding: 0, marginLeft: "0.1rem" }}
                >
                  <p style={{ marginTop: "35px", fontSize: "14px" }}>
                    {this.state.selectedDoctor.description}
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Desk;
