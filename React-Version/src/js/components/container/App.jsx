import React from "react";
import ReactDOM from "react-dom";
import FirstPage from "../presentational/FirstPage.jsx";
import SecondPage from "../presentational/SecondPage.jsx";
import ThirdPage from '../presentational/ThirdPage.jsx';
import FourthPage from "../presentational/FourthPage.jsx";
import ThreeScene from '../presentational/ThreeScene';
import { animated, Transition } from 'react-spring/renderprops';

import { render } from 'react-dom';


const pages = [
  style => ( <SecondPage styleTransition={style} /> ),
  style => ( <ThirdPage styleTransition={style} /> ),
  style => ( <FourthPage styleTransition={style} /> ),

  // style => (
  //   <animated.div style={{ ...style, background: '#b3FFBD', overflowX: "hidden" }}>A</animated.div>
  // ),
  // style => (
  //   <animated.div style={{ ...style, background: '#B2DBBF' , overflowX: "hidden"}}>B</animated.div>
  // ),
  // style => (
  //   <animated.div style={{ ...style, background: '#12DBBF' , overflowX: "hidden"}}>C</animated.div>
  // ),
];



export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      index: 0
    };
    this.handleChange = this.handleChange.bind(this);
    // this.toggle = this.toggle.bind(this);
    
  }

  toggle = (event) =>  {
    this.setState(state => ({ 
        index: state.index === 2 ? 0 : state.index + 1,
    }))
  };

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {

    return (
        <div>
          <FirstPage />
          <div className="main" onClick={this.toggle}>
              <Transition
              native
              reset
              unique
              items={this.state.index}
              from={{ opacity: 0, transform: 'translate3d(0%,0,0)' }}
              enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
              leave={{ opacity: 0, transform: 'translate3d(0%,0,0)' }}>

              {index => pages[index]} 

              </Transition>
              {/* <div id="webgl_canvas"></div> */}
           
           {/* <HookedComponent />  */}
              
          </div>
          <div>

            {/* <h1>heal</h1> */}

            {/* <ThreeScene></ThreeScene> */}
          </div>

          </div>
    );
  }
}


const wrapper = document.getElementById('page-container');
wrapper ? ReactDOM.render(<App />, wrapper) : null;

