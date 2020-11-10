import React from 'react';
import './MultiNews.css';
import News1 from './2.jpg';
import News2 from './1.jpeg';
class MultiNews extends React.Component{
    render(){
        return(
            <div className="MultiNews__container">
                <div className="row MultiNews__mainComponent MultiNews__row">
                    <div className="col-md-6 col-sm-6 col-12 MultiNews__mainColumn MultiNews__column MultiNews__box">
                        <div className="MultiNews__image ">
                            <img src={News1} className="News1 MultiNews__mainImage img-fluid"></img>
                        </div>
                        <div className="MultiNews__content">
                            <p className="MultiNews__newsTimeline">
                                4 April, 2020 09:30AM
                            </p>
                            <p className="MultiNews__newsTitle">
                                Well This is the Title
                            </p>
                            <span className="MultiNews__newsContent">
                                Hey I can't think of something so I am writing random stuff. Tahnk you for reading this bs. So I'll end this here.
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12 MultiNews__subColumn MultiNews__column">
                        <div className="row MultiNews__row MultiNews__box">
                            <div className="col-md-4 col-sm-4 col-4 MultiNews__column MultiNews__image">
                                <img src={News2} className="News2 MultiNews__subImage img-fluid"></img>
                            </div>
                            <div className="col-md-8 col-sm-8 col-8 MultiNews__column">
                                <div className="MultiNews__content">
                                    <p className="MultiNews__newsTimeline">
                                        4 April, 2020 09:30AM
                                    </p>
                                    <p className="MultiNews__newsTitle">
                                        Well This is the Title
                                    </p>
                                    <span className="MultiNews__newsContent">
                                        Hey I can't think of something so I am writing random stuff.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row MultiNews__row MultiNews__box">
                            <div className="col-md-4 col-sm-4 col-4 MultiNews__column MultiNews__image">
                                <img src={News2} className="News2 MultiNews__subImage img-fluid"></img>
                            </div>
                            <div className="col-md-8 col-sm-8 col-8 MultiNews__column">
                                <div className="MultiNews__content">
                                    <p className="MultiNews__newsTimeline">
                                        4 April, 2020 09:30AM
                                    </p>
                                    <p className="MultiNews__newsTitle">
                                        Well This is the Title
                                    </p>
                                    <span className="MultiNews__newsContent">
                                        Hey I can't think of something so I am writing random stuff.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row MultiNews__row MultiNews__box">
                        <div className="col-md-4 col-sm-4 col-4 MultiNews__column MultiNews__image ">
                                <img src={News2} className="News2 MultiNews__subImage img-fluid"></img>
                            </div>
                            <div className="col-md-8 col-sm-8 col-8 MultiNews__column">
                                <div className="MultiNews__content">
                                    <p className="MultiNews__newsTimeline">
                                        4 April, 2020 09:30AM
                                    </p>
                                    <p className="MultiNews__newsTitle">
                                        Well This is the Title
                                    </p>
                                    <span className="MultiNews__newsContent">
                                        Hey I can't think of something so I am writing random stuff.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MultiNews;