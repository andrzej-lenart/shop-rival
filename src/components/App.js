import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import Jumbotron from './common/Jumbotron';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Jumbotron />
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
};

export default App;