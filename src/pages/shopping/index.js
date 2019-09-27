import React, { Component } from 'react';
import { ShoppingWrapper } from "./style"

import { NavLink } from "react-router-dom"

export default class Shopping extends Component {
    render() {
        return (
            <ShoppingWrapper>
                <div className="shopping">
                    <div className="header">
                        <div className="header_left"></div>
                        <div className="header_center">C H A R L E S   &   K E I T H</div>
                        <div className="header_right">
                            <a href="#">
                                <span className="iconfont">&#xe607;</span>
                            </a>
                        </div>
                    </div>
                    <div className="nav">
                        <ul>
                            <NavLink to="/shopping/news">
                                <li>新品</li>
                            </NavLink>

                            <NavLink to="/shopping/cools">
                                <li>人气推荐</li>
                            </NavLink>

                            <li>鞋履</li>
                            <li>包袋</li>
                            <li>配饰</li>
                            <li>儿童</li>
                            <li>折扣</li>
                        </ul>
                    </div>
                </div>
            </ShoppingWrapper>
        )
    }
}