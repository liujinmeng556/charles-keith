import React, { Component } from 'react';
import { HeaderWrapper } from "./style";
import { Fragment } from "react"
export default class Sort extends Component {
    render() {
        return (
            <Fragment>
                <HeaderWrapper>
                    <div className="header">
                        <div className="header_left">
                            <span className="iconfont">&#xe6be;</span>
                        </div>
                        <div className="header_center">分类</div>
                        <div className="header_right">
                            <span>
                                <span></span>
                            </span>
                        </div>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>新品</li>
                            <li>鞋履</li>
                            <li>包袋</li>
                            <li>配饰</li>
                            <li>折扣</li>
                        </ul>
                    </div>
                </HeaderWrapper>


            </Fragment>

        );
    }
}