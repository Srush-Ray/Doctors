import React, { Fragment } from 'react';
import './Desk.css';
import president from '../Images/Rectangle 204.png';
import arrow from '../Images/bi_arrow-right.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Doctor from './Doctor';
import cross from '../Images/Vector.svg';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
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
        
        return(
            <div className="container">
            
            {!this.state.showDoctors &&
               <Fragment>
               <hr />
               
               <div className="row align-items-center">  
               <div className ="col-12 col-md-6 txt" >
               <h1>Desk</h1>
                        <p className="textPara">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare
                        </p>
                        
                        <span className="linkDesktop">
                        <a href="#">Click to know more</a>
                        <img src={arrow} alt="Right Arrow" style={{marginLeft:"1rem"}}/>
                        </span>
                        
                        </div> 
                        <div className="col-12 col-md-6" >
                        <Carousel
                        className="mobileCarousel"
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        // infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        // autoPlaySpeed={1000}
                        keyBoardControl={true}
                        // customTransition="all .5"
                        // transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
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
                    <span className="linkMobile">
                    <a href="#">Click to know more</a>
                    <img src={arrow} alt="Right Arrow" style={{marginLeft:"1rem"}}/>
                    </span>     
                    </div>
                    </div>
                    </Fragment>
                }
                        {
                            this.state.showDoctors && 
                            //   <Doctor />
                    <Fragment>
                    <div className="linkDesktop">
                    <div className="">
                        
                    </div>
                    
                    <div className="row align-items-center">
                    <div className="col-md-6">
                    <button type="btn" className="closeButton"><img src={cross} alt="close" onClick={this.closeModel} /></button> 
                    <h1 style={{marginTop:"108px"}}>{this.state.selectedDoctor.designation}</h1>
                    <p className="doctorName" style={{lineHeight:"1rem"}}>{this.state.selectedDoctor.name}</p>
                    <p style={{marginTop:"50px",fontSize:"14px"}}>{this.state.selectedDoctor.description}</p>
                    </div>
                    <div className="col-md-6">
                    <img src={this.state.selectedDoctor.image} alt={this.state.selectedDoctor.name} className="selectedDoctorImage" />
                                <p className="selectedDoctorDesignation">{this.state.selectedDoctor.designation}</p>
                                </div>
                                </div>
                    </div>
                    <div className="linkMobile">                    
                    <div className="row align-items-center">
                    
                    <div className="col-12">    
                    <div className="rowText">
                    <h1 >{this.state.selectedDoctor.designation}</h1>
                    <button type="btn" className="closeButton"><img src={cross} alt="close" onClick={this.closeModel} /></button> 
                    </div>
                    <p className="doctorName" style={{lineHeight:"1rem"}}>{this.state.selectedDoctor.name}</p>
                    <img src={this.state.selectedDoctor.image} alt={this.state.selectedDoctor.name} className="selectedDoctorImage" />
                    <p className="selectedDoctorDesignation">{this.state.selectedDoctor.designation}</p>
                    </div>
                    <div className="col-12">
                   
                    <p style={{marginTop:"50px",fontSize:"14px"}}>{this.state.selectedDoctor.description}</p>
                    </div>
                    </div>
                    </div>
                    </Fragment>
                }
                </div>
                ); 
                
                
            }



}

export default Desk;