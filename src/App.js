import React, {Component} from 'react';
import {Link} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import About from './About/About';
import BlackAndWhite from './BlackAndWhite/BlackAndWhite';
import Color from './Color/Color';
import DearNewYorkCity from './DearNewYorkCity/DearNewYorkCity';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log('App Component Did Mount');
    }
    render() {
        console.log('inside App component')
        const children = React.cloneElement(this.props.children, {})
        return (<div className="App">
            <header className="App-header">
                <div className="App-title">
                    <Link to="/"><h1 className="App-title">Gene Coleman</h1></Link>
                    {/* <Link to="/"><h2 className="App-subtitle">Photography by Gene Coleman</h2></Link> */}
                </div>
                <div className="App-nav">
                    <div className="App-nav-link"><Link to="/about">About</Link></div>
                    <div className="App-nav-link"><Link to="/b&w">Black&White</Link></div>
                    <div className="App-nav-link"><Link to="/color">Color</Link></div>
                    <div className="App-nav-link"><Link to="/dearnyc">Dear New York City</Link></div>
                </div>
            </header>
            <div className="App-content">
                { children }
            </div>
            <footer className="App-footer"></footer>
        </div>);
    }
}

export default App;
