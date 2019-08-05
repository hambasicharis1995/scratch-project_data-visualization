// you dont need a constructor if your component is not statement

import React from 'react';

// import components

// import css
import './../styling/SearchContainer.css';
import 'animate.css';
import Search from './Search.jsx';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id='SearchContainer' className='animated heartBeat'>
                <Search updateState={this.props.updateState} data={this.props.data}></Search>
            </div>
        )
    }
}

export default SearchContainer;
