import React from "react";
import "./Covid.css";
import pic from "../Images/Analytic 1.png";
import firstIllustration from "../Images/Fisrt illustration.svg";
import Table from "./Table";
class Covid extends React.Component {
  upload() {
    document.getElementById("selectImage").click();
  }
  render() {
    return (
      <div className="" style={{ textAlign: "center" }}>
        <div>
          <hr className="Covid__hr" />
        </div>
        <div className="row Covid__row align-items-center">
          <div className="col-md-5 col-12">
            <h3 className="Covid__heading Covid__marginDesktop">Covid-19</h3>
            <div className="Covid__heading1 Covid__marginDesktop">
              News & Centers
            </div>
            <p
              style={{
                marginTop: "40px",
                fontSize: "16px",
                textAlign: "left",
              }}
              className="Covid__marginDesktop"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aut
            </p>
          </div>
          <div className="col-md-7 col-12">
            <img
              className="Covid__firstIllustration"
              src={firstIllustration}
            ></img>
          </div>
          <div className="Covid__end">Latest news (Branches)</div>
        </div>

        <div className="Covid__div2">
          <div
            className="row align-items-center"
            style={{ paddingTop: "50px" }}
          >
            <div className="col-md-5 col-12">
              <p
                className="Covid__heading Covid__marginDesktop"
                style={{
                  textAlign: "left",
                  fontSize: "30px",
                  color: " blue",
                  fontWeight: "bold",
                }}
              >
                Recommendation
              </p>
              <p
                style={{
                  color: " blue",
                  fontSize: "30px",
                  textAlign: "left",
                }}
                className="Covid__marginDesktop"
              >
                NIMA CC
              </p>
              <p
                style={{
                  marginTop: "45px",
                  fontSize: "20px",
                  textAlign: "left",
                }}
                className="Covid__marginDesktop"
              >
                Real-time training during global emergencies is critical for
                effective preparedness and response.The COVID-19 channel
                provides learning resources for health professionals,
                decision-makers and the public for the outbreak of coronavirus
                disease (COVID-19).
              </p>
              <p
                style={{ fontSize: "20px", textAlign: "left" }}
                className="Covid__marginDesktop"
              >
                Get Certificate for these Free Online Courses.
                <p />
              </p>
            </div>
            <div className="offset-lg-2 offset-md-1 col-md-2 Covid__CenterDiv">
              <img
                src={pic}
                alt="picture"
                className="Covid__secondillustration"
              ></img>
              <button
                type="button"
                className="btn btn-outline-primary Covid__button"
              >
                Training for current outbreak
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="Covid__marginDesktop Covid__text">
                This is to inform you that there is a misprint in the nomination
                form send to you by me with the Notice of the 61st Annual
                Central
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "auto",
          }}
        >
          <Table />
        </div>
      </div>
    );
  }
}

export default Covid;
