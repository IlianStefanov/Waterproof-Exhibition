import React from "react";
import PropTypes from "prop-types";
import Counter from '../animations/Counter.jsx';
import HookedComponent from '../animations/Hooks.jsx';
import {Trail, Spring, Transition, animated, config} from "react-spring/renderprops";
import { TrailText } from '../animations/TrailText.jsx';

// import '../../../css/pageTransition.scss';
const FirstPage = ({styleTransition, smut}) => (

            // Add animated.div to access animated properties {...styleTransition}
            
            // <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
            // { props  => (
        
                    <animated.div className="section glitch" id="section0" style={{...styleTransition}}>
                        {/* <div className="triangle glitch"></div> */}
                        <div className="content-wrapper">


                            <TrailText>GREETINGS</TrailText>                
                            <p className="subtext-intro">WELCOME TO MY PORTFOLIO</p>
                            {/* <div class="btn skip">
                                <span class="hover-bg reset">
                                    <span class="hover-text reset">Skip</span>
                                </span>
                                Skip
                            </div> */}
                        </div>
                        <Counter />
                        {/* <HookedComponent /> */}
                    </animated.div>  
                    
            // )
            // }
            // </Spring>
            

);

export default FirstPage;