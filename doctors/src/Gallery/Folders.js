import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Folders.css';
import Grid from './Grid';

const slideData = [
  {
    index: 0,
    headline: '25th Anniversary',
    button: 'view more',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'view more',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'view more',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'view more',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  }
]

export default class Folders extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked : false
    };
  }

  handleClick = () =>{
    this.setState({
      clicked:true
    })
  }
  
  render() 
  {
    return (
      
        <div>
 {!this.state.clicked &&
      <div className="container Folders_container">
        <div className="row">
        
          <div className="col-sm-4 col-xs-12">
            <div class="card">
              <figure class="card__thumbnail">
                <img className="Folder_img" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
              
                <div className="card__title">
                  7th Anniversary
                  <div>
                    <button className="Folder_button" onClick={this.handleClick} href="">View More</button>
                  </div>
                </div>
              </figure>
            </div>  
        </div>
        <div className="col-sm-4 col-xs-12">
            <div class="card">
              <figure class="card__thumbnail">
                <img className="Folder_img" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
              
                <div className="card__title">
                  7th Anniversary
                  <div>
                    <button className="Folder_button" href="">View More</button>
                  </div>
                </div>
           
              
              </figure>
            </div>  
        </div>
        <div className="col-sm-4 col-xs-12">
            <div class="card">
              <figure class="card__thumbnail">
                <img className="Folder_img" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
              
                <div className="card__title">
                  7th Anniversary
                  <div>
                    <button className="Folder_button" href="">View More</button>
                  </div>
                </div>
           
              
              </figure>
            </div>  
        </div>
        <div className="col-sm-4 col-xs-12">
            <div class="card">
              <figure class="card__thumbnail">
                <img className="Folder_img" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
                <div className="card__title">
                  7th Anniversary
                  <div>
                    <button className="Folder_button" href="">View More</button>
                  </div>
                </div>
           
              
              </figure>
            </div>  
        </div>
        </div>
      </div>
      }

      {this.state.clicked  &&
        <Grid/>
      }
      </div>
    )
  }
}




