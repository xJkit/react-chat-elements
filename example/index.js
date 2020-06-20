import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

import { TimeagoProvider } from '../src';
// https://github.com/hustcc/timeago.js/tree/6613d4c5c9bd9bd280925e6832326a2ef784066f/src/lang

const render = Component => {
    ReactDOM.render(
        <TimeagoProvider locale="zh_TW">
            <Component/>
        </TimeagoProvider>
        ,document.getElementById('app'),
    );
};

render(App);
