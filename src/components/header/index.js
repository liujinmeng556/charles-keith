import React, { Component } from 'react';
import { HeaderWrapper } from "./style"
export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div className="header">
                    <div className="header_left"></div>
                    <div className="header_center">C H A R L E S   &   K E I T H</div>
                    <div className="header_right">
                        <span>
                            <span className="iconfont">&#xe607;</span>
                        </span>
                    </div>
                </div>
            </HeaderWrapper>
        );
    }
}
