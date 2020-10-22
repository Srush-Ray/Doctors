import React, { Fragment } from 'react';
import './AboutUs.css'
import pic from "../Images/About us.svg";
import president from '../Images/Rectangle 204.png';
// import gen from "../Image/Rectangle 205.png";
import treasurer from "../Images/doctor-sitting-in-front-of-his-desk-2182979 (1).png";
import organiser from "../Images/contemplative-doctor-in-uniform-reading-clinical-records-4173239.png";
import blue from "../Images/man-in-blue-scrubs-3934615.png";
import globe from "../Images/person-with-a-face-mask-and-latex-gloves-holding-a-globe-4167541.png";
import drs from "../Images/two-men-standing-inside-a-room-2182976.png";
import woman from "../Images/woman-in-white-medical-robe-3714743.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
 
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
        items: 1,
    }
  };
class Aboutus extends React.Component {
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
                    place:"solapur (M.S)",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:president,
                    designation: "Gen. Secretry",
                    name:"Dr. U.S.Pandey ",
                    place:"Varanasi (U.P)",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:treasurer,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    place:"Akola (M.S)",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                },
                {
                    image:organiser,
                    designation: "Organiser",
                    name: "Dr. Ashutosh Kulakrni",
                    place:"solapur (M.S)",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                }
            ],
            joint:[
               {
                    image:woman,
                    designation: "President",
                    name: "Dr. V.B. Themburnikar",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:organiser,
                    designation: "Gen. Secretry",
                    name:"Dr. U.S.Pandey ",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:globe,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                },
                {
                    image:drs,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                },
                {
                    image:blue,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                }
            ],
            assistant:[
                 {
                    image:blue,
                    designation: "President",
                    name: "Dr. V.B. Themburnikar",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:globe,
                    designation: "Gen. Secretry",
                    name:"Dr. U.S.Pandey ",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                },
                {
                    image:drs,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                },
                {
                    image:woman,
                    designation: "Treasurer",
                    name: "Dr. Ashutosh Kulakrni",
                    description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue lacinia pretium. Vivamus sit amet blandit elit. Mauris fringilla lorem et commodo malesuada. Nulla quis pulvinar risus. Nunc tincidunt ante vitae erat facilisis lobortis. Duis sapien nisl, ullamcorper ac accumsan non, eleifend vel purus. Sed pretium tortor diam, vel pharetra augue lobortis quis. Aliquam sed lacinia lectus. Duis finibus leo et nunc dignissim, vitae hendrerit arcu sagittis. Quisque sed augue iaculis, ornare",
                    
                }
            ]
            ,
        }
        // this.openModel = this.openModel.bind(this);

    }
    render()
    {return(  <>
        <div>
        
        <div className="firstdiv">
                
                <div className="row align-items-center mr-5">
                <div className="col-12">
                <hr/>
                </div>
                    <div className="col-12 col-md-6" >
                        <div className="para">
                            
                        <h1 style={{fontWeight:"bold"}}>About Us</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque augue viverra bibendum sollicitudin. Quisque auctor in dui non blandit. Suspendisse pulvinar tellus nulla, sit amet aliquet risus ultrices suscipit. Nunc fringilla consequat leo venenatis luctus. Maecenas interdum luctus fringilla. Nullam viverra ligula eget finibus egestas. Fusce felis purus, sagittis a neque quis, dignissim aliquet turpis. Nulla facilisi. Nam eget massa eget augue euismod tempor eget vitae lorem. Pellentesque vel libero sed orci bibendum venenatis fermentum in libero. In suscipit tellus id diam sagittis eleifend. Curabitur hendrerit risus sit amet tortor tincidunt, id faucibus lacus rutrum.</p>
                        </div>
                </div>
                <div className="col-12 col-md-6">
                <img className="illustration" src={pic} alt=""/>
                </div>
            </div>
        </div>
        
        <h3 >NIMA CC.(India) 19-21</h3>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
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
        <div key={index} className="doctorContainer" >
        <div className="imageContainer">
        <img src={doctor.image} alt={doctor.name} className="doctorImage" />
        <p className="doctorDesignation">{doctor.designation}</p>
        </div>
                <p className="doctorName">{doctor.name}</p>
                <p >{doctor.place}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div>
    </div>
    <h3 >JOINT SECRETARY</h3>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
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
        this.state.joint.map((joint,index) =>
        <div key={index} className="doctorContainer" >
        <div className="imageContainer">
        <img src={joint.image} alt={joint.name} className="doctorImage" />
        <p className="doctorDesignation">{joint.designation}</p>
        </div>
        <p className="doctorName">{joint.name}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div>
    
     <h3>ASSISTANT SECRETARY</h3>
        <div className="row">
        <div className="col-md-9 offset-md-3">
        <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        showArrows={true}
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
        this.state.assistant.map((assistant,index) =>
        <div key={index} className="doctorContainer" >
        <div className="imageContainer">
        <img src={assistant.image} alt={assistant.name} className="doctorImage" />
        <p className="doctorDesignation">{assistant.designation}</p>
        </div>
        <p className="doctorName">{assistant.name}</p>
        </div>
        )
    }
    </Carousel>
    </div>
    </div>
    </>
    )}
    }
    
    export default Aboutus;