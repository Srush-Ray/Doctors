import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import './Grid.css';

class Grid extends Component {
  render() {
    const fn = function () {
      /* do your action */
    }
    return (
      <Coverflow width={960} height={500}
      displayQuantityOfSide={2}
      navigation={false}
      enableScroll={true}
      clickable={true}
      active={0}
      enableHeading={false}
    >
      <div
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
      >
        <img
          src='https://images.unsplash.com/photo-1571467668277-de06d5689908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
          alt='1'
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </div>
      <img src='http://modiwo.com/wp-content/uploads/2013/05/horizontal-lightning-over-city-wallpaper.jpg' alt='2' data-action="http://andyyou.github.io/react-coverflow/"/>
      <img src='https://images.unsplash.com/photo-1605722558200-b83d78c255a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='3' data-action="http://andyyou.github.io/react-coverflow/"/>
      <img src='https://images.unsplash.com/photo-1610629536176-e233e764ef24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt='4' data-action="http://andyyou.github.io/react-coverflow/"/>
      <img src='https://images.unsplash.com/photo-1610784547179-66493e9614dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80' alt='5' data-action="http://andyyou.github.io/react-coverflow/"/>

    </Coverflow>
    )
  }
}




  export default Grid;