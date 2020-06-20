import React, { createContext } from 'react';
import { register } from 'timeago.js';

export const LocaleContext = createContext('en_US');

export default class extends React.Component {
    static defaultProps = {
        locale: 'en_US',
        localeFunc: undefined,
    };

    constructor(props) {
        super(props);
        let localeFunc;
        try {
            localeFunc = require(`timeago.js/lib/lang/${props.locale}`);
        } catch (error) {}

        if (typeof props.localeFunc === 'function') {
            localeFunc = props.localeFunc;
        }
        register(props.locale, localeFunc);
    }
    render() {
        return (
            <LocaleContext.Provider value={this.props.locale}>
                {this.props.children}
            </LocaleContext.Provider>
        );
    }
}
