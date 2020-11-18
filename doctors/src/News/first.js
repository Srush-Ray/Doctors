import React from 'react';
import "./first.css"
import News1 from './2.jpg';

class OneNews extends React.Component{
    render()
    {
        return(
            <div className="OneNews__container">
                <div className="row OneNews__mainComponent OneNews__row OneNews__box">
                        <div className="OneNews__image col-12">
                            <img src={News1} className="News1 OneNews__mainImage img-fluid"></img>
                        </div>
                        <div className="OneNews__content col-12">
                            <p className="OneNews__newsTimeline ">
                                4 April, 2020 09:30AM
                            </p>
                            <p className="OneNews__newsTitle">
                                Well This is the Title
                            </p>
                            <span className="OneNews__newsContent">
                                Hey I can't think of something so I am writing random stuff. Tahnk you for reading this bs. So I'll end this here.
                            </span>
                        </div>
                </div>
            </div>    
           
        ); 


    }

        
}

export default OneNews;
