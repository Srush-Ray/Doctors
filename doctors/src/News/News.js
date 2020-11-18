import React from "react";
import pic1 from "../Images/Rectangle 440.png";
import pic2 from "../Images/Rectangle 441.png";
import pic3 from "../Images/Rectangle 442.png";
import pic4 from "../Images/Rectangle 443.png";
// import pic5 from "";
// import pic6 from "";

class News extends React.Component {
  render() {
    return (
      <>
        <div className="desktop">
          <hr />
          <h2 className="News__heading ml-5" style={{ float: "left" }}>
            TRENDING NEWS
          </h2>
          {/*<hr className="News_line" />*/}
          <div className="News_b">
            <div className="row w-100 ">
              <div className="News_firstcol col-sm-6 no-gutters ">
                <div
                  className="News_cont container"
                  style={{ position: "relative" }}
                >
                  <img
                    src={pic1}
                    style={{ width: "105%", filter: "brightness(57%)" }}
                    className="News_img1"
                    alt="picture"
                  ></img>
                  <div
                    className="News_date ml-3"
                    style={{
                      position: "absolute",
                      bottom: "17vh",
                      left: "3vh",
                      fontSize: "3vh",
                      color: " rgb(102, 97, 97)",
                    }}
                  >
                    4 April, 2020 09:30 AM
                  </div>
                  <div
                    className="News_subtitle"
                    style={{
                      position: "absolute",
                      bottom: "1vh",
                      left: "5vh",
                      color: "white",
                      fontSize: "5.5vh",
                      fontWeight: "semi-bold",
                    }}
                  >
                    This Election Will Bring a <br /> Hurricane of
                    Misinformation
                  </div>
                </div>
              </div>
              <div className="col-sm-6 h-100 no-gutters">
                <div className="container" style={{ position: "relative" }}>
                  <img
                    src={pic2}
                    className="News_img1"
                    style={{ width: "100%", filter: "brightness(57%)" }}
                    alt="picture"
                  ></img>
                  <div
                    className="News_date ml-3"
                    style={{
                      position: "absolute",
                      bottom: "12vh",
                      color: "rgb(102, 97, 97)",
                    }}
                  >
                    4 April, 2020 09:30 AM
                  </div>
                  <div
                    className="News_subtitle"
                    style={{
                      position: "absolute",
                      bottom: "1vh",
                      color: "white",
                      fontSize: "4vh",
                      left: "25px",
                      fontWeight: "semi-bold",
                    }}
                  >
                    This Election Will Bring a <br /> Hurricane of
                    Misinformation
                  </div>
                </div>
                <div className="row w-100 mt-4 ">
                  <div className="col-sm-6  no-gutters ">
                    <img
                      src={pic3}
                      style={{
                        width: "100%",
                        height: "115%",
                        filter: "brightness(57%)",
                        marginLeft: "0%",
                      }}
                      className="News_img1"
                      alt="picture"
                    ></img>
                    <div
                      className="News_date ml-3"
                      style={{
                        position: "absolute",
                        bottom: "59px",
                        color: "rgb(102, 97, 97)",
                      }}
                    >
                      4 April, 2020 09:30 AM
                    </div>
                    <div
                      className="News_subtitle"
                      style={{
                        position: "absolute",
                        bottom: "5px",
                        color: "white",
                        fontSize: "20px",
                        left: "25px",
                        fontWeight: "semi-bold",
                      }}
                    >
                      This Election Will Bring a <br /> Hurricane of
                      Misinformation
                    </div>
                  </div>
                  <div className="col-sm-6 no-gutters">
                    <img
                      src={pic4}
                      style={{
                        width: "100%",
                        height: "115%",
                        filter: "brightness(57%)",
                      }}
                      className="News_img1"
                      alt="picture"
                    ></img>
                    <div
                      className="News_date ml-3"
                      style={{
                        position: "absolute",
                        bottom: "59px",
                        color: " rgb(102, 97, 97)",
                      }}
                    >
                      4 April, 2020 09:30 AM
                    </div>
                    <div
                      className="News_subtitle"
                      style={{
                        position: "absolute",
                        bottom: "5px",
                        color: "white",
                        fontSize: "20px",
                        left: "25px",
                        fontWeight: "semi-bold",
                      }}
                    >
                      This Election Will Bring a <br /> Hurricane of
                      Misinformation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="News__mob">
                    <div className="row">
                    <div className="container" style={{position:"relative"}}>
                <img src={pic1} className="News_img1" style={{width:"100%",filter: "brightness(50%)"}} alt="picture"></img>
                <div className="News_date ml-3" style={{position:"absolute",bottom:"35px",color:"rgb(150, 143, 143)"}}>4 April, 2020 09:30 AM</div>
                <div className="News_subtitle" style={{position:"absolute",bottom:"5px",color:"white",fontSize:"30px",left:"25px",fontWeight:"semi-bold"}}>This Election Will Bring a <br/> Hurricane of Misinformation</div>
                </div>
                <div className="container" style={{position:"relative"}}>
                <img src={pic1} className="News_img1" style={{width:"100%",height:"10%",filter: "brightness(50%)"}} alt="picture"></img>
                <div className="News_date ml-3" style={{position:"absolute",bottom:"35px",color:"rgb(150, 143, 143)"}}>4 April, 2020 09:30 AM</div>
                <div className="News_subtitle" style={{position:"absolute",bottom:"5px",color:"white",fontSize:"30px",left:"25px",fontWeight:"semi-bold"}}>This Election Will Bring a <br/> Hurricane of Misinformation</div>
                </div>
                <div className="container" style={{position:"relative"}}>
                <img src={pic1} className="News_img1" style={{width:"100%",filter: "brightness(50%)"}} alt="picture"></img>
                <div className="News_date ml-3" style={{position:"absolute",bottom:"35px",color:"rgb(150, 143, 143)"}}>4 April, 2020 09:30 AM</div>
                <div className="News_subtitle" style={{position:"absolute",bottom:"5px",color:"white",fontSize:"30px",left:"25px",fontWeight:"semi-bold"}}>This Election Will Bring a <br/> Hurricane of Misinformation</div>
                </div>
                <div className="container" style={{position:"relative"}}>
                <img src={pic1} className="News_img1" style={{width:"100%",filter: "brightness(50%)"}} alt="picture"></img>
                <div className="News_date ml-3" style={{position:"absolute",bottom:"35px",color:"rgb(150, 143, 143)"}}>4 April, 2020 09:30 AM</div>
                <div className="News_subtitle" style={{position:"absolute",bottom:"5px",color:"white",fontSize:"30px",left:"25px",fontWeight:"semi-bold"}}>This Election Will Bring a <br/> Hurricane of Misinformation</div>
                </div>
                </div>
                </div>  */}
      </>
    );
  }
}
export default News;
