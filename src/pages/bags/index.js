import React, { Component } from 'react';
import { BagsWrapper } from "./style"
export default class Bags extends Component {
    render() {
        console.log(this.props)
        return (

            < BagsWrapper >
                <div className="header">
                    <div className="header_left">
                        <span className="iconfont">&#xe6be;</span>
                    </div>
                    <div className="header_center">购物袋</div>
                    <div className="header_right">
                        <span>
                            <span></span>
                        </span>
                    </div>
                </div>
                <div className="bag">
                    <div className="iconfont">&#xe88b;</div>
                    <div className="bag_no">当前购物袋中没有商品</div>
                    <p>即刻添置</p>
                </div>
            </BagsWrapper >
        );
    }
}