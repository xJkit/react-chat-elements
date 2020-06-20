import React, { Component } from 'react';
import { LocaleContext } from '../TimeagoProvider';
import './ChatList.css';

import ChatItem from '../ChatItem/ChatItem';

const classNames = require('classnames');

export class ChatList extends Component {
    static contextType = LocaleContext;
    onClick(item, i, e) {
        if (this.props.onClick instanceof Function)
            this.props.onClick(item, i, e);
    }

    onContextMenu(item, i, e) {
        e.preventDefault();
        if (this.props.onContextMenu instanceof Function)
            this.props.onContextMenu(item, i, e);
    }

    onAvatarError(item, i, e) {
        if (this.props.onAvatarError instanceof Function)
            this.props.onAvatarError(item, i, e);
    }

    render() {
        const timeagoLocale = this.context;
        return (
            <div
                ref={this.props.cmpRef}
                className={classNames('rce-container-clist', this.props.className)}>
                {
                    this.props.dataSource.map((x, i) => (
                        <ChatItem
                            id={x.id || i}
                            key={i}
                            lazyLoadingImage={this.props.lazyLoadingImage}
                            {...x}
                            timeagoLocale={timeagoLocale}
                            onAvatarError={(e) => this.onAvatarError(x,i,e)}
                            onContextMenu={(e) => this.onContextMenu(x,i,e)}
                            onClick={() => this.onClick(x, i)}/>
                    ))
                }
            </div>
        );
    }
}

ChatList.defaultProps = {
    dataSource: [],
    onClick: null,
    lazyLoadingImage: undefined,
};

export default ChatList;
