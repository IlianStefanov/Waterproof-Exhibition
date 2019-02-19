// import React from "react";
// import { animated } from 'react-spring/renderprops';

// const SecondPage = ({styleTransition}) => (

//        <animated.div class="section" id="section1" style={{...styleTransition}}>
//             <div className="projects-section-wrapper">

//                 <h1>Smut</h1>
//             </div>
       
//             {/* <div class="square">
//             </div> */}
//             {/* <h2 class="side_text">Exhibition</h2> */}
//         </animated.div>

// );

// export default SecondPage;


// import 'antd/dist/antd.css';
// import './styles.css';
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import lodash from 'lodash';
import { Icon } from 'antd';
import data from './data';
import Header from './Header';
import { Grid, Slug, Fade } from 'mauerwerk';


import { animated } from 'react-spring/renderprops';

class SecondPage extends Component {
    state = { data, columns: 2, margin: 70, filter: '', height: true }
    search = e => this.setState({ filter: e.target.value })
    shuffle = () => this.setState(state => ({ data: lodash.shuffle(state.data) }))
    setColumns = e => this.setState({ columns: parseInt(e.key) })
    setMargin = e => this.setState({ margin: parseInt(e.key) })
    setHeight = e => this.setState({ height: e })
    render() {

        const data = this.state.data.filter(
            d => d.name.toLowerCase().indexOf(this.state.filter) != -1
          )
        return (

            <animated.div class="section" id="section1" style={{...this.props.styleTransition}}>
                 <div className="projects-section-wrapper">
                    {/* <Header
                        {...this.state}
                        search={this.search}
                        shuffle={this.shuffle}
                        setColumns={this.setColumns}
                        setMargin={this.setMargin}
                        setHeight={this.setHeight}
                    /> */}
                     {/* <h1>Smut</h1> */}
                 </div>
                 
                 {/* <div class="square">
                 </div> */}
                 {/* <h2 class="side_text">Exhibition</h2> */}
             </animated.div>
     
        );
    }
} 

export default SecondPage;