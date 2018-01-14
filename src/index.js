import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducer from './routes/reducers';
import App from './App';
import Home from './Home/Home';
import About from './About/About';
import BlackAndWhite from './BlackAndWhite/BlackAndWhite';
import Color from './Color/Color';
import DearNewYorkCity from './DearNewYorkCity/DearNewYorkCity';
import registerServiceWorker from './registerServiceWorker';

let router;
export const store = createStore(reducer, applyMiddleware(reduxPromise));

router = (<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/b&w" component={BlackAndWhite}/>
            <Route path="/color" component={Color}/>
            <Route path="/dearnyc" component={DearNewYorkCity}/>
        </Route>
    </Router>
</Provider>)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
