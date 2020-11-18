import React from 'react';
import "./second.css";
import News1 from './2.jpg';
import News2 from './1.jpeg';


class TwoNews extends React.Component{
    render()
    {
        return(
            <div className="TwoNews__container">
                <div className="row TwoNews__mainComponent TwoNews__row ">
                    <div className="col-md-6 col-sm-6 col-12 TwoNews__column TwoNews__box">
                        <div className="TwoNews__image ">
                            <img src={News1} className="News1 TwoNews__mainImage img-fluid"></img>
                        </div>
                        <div className="TwoNews__content">
                            <p className="TwoNews__newsTimeline">
                                4 April, 2020 09:30AM
                            </p>
                            <p className="TwoNews__newsTitle">
                                Well This is the Title
                            </p>
                            <span className="TwoNews__newsContent">
                                Hey I can't think of something so I am writing random stuff. Tahnk you for reading this bs. So I'll end this here.
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12 TwoNews__column TwoNews__box">
                        <div className="TwoNews__content">
                            <p className="TwoNews__newsTimeline">
                                4 April, 2020 09:30AM
                            </p>
                            <p className="TwoNews__newsTitle">
                                Well This is the Title
                            </p>
                            <span className="TwoNews__newsContent">
                                Hey I can't think of something so I am writing random stuff. Tahnk you for reading this bs. So I'll end this here.
                            </span>
                        </div>
                        <div className="TwoNews__image ">
                            <img src={News1} className="News1 TwoNews__mainImage img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div> 
           
        ); 


    }

        
}

export default TwoNews;
