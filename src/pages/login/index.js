import React, { Component } from 'react';
import { LoginNewsWrapper } from "./style"
import { NavLink } from "react-router-dom"

export default class Login extends Component {
    render() {
        return (

            < LoginNewsWrapper >
                <div className="header">
                    <div className="header_left">
                        <NavLink to="/shopping/new">
                            <span className="iconfont">&#xe6be;</span>
                        </NavLink>
                    </div>
                    <div className="header_center">C H A R L E S   &   K E I T H</div>
                    <div className="header_right">
                        <span>
                            <span></span>
                        </span>
                    </div>
                </div>
                <div className="log">
                    <input type="text" placeholder="手机号" />
                    <input type="text" placeholder="输入密码" />
                </div>
                <div className="log_btn">
                    <button>登入</button>
                </div>
                <div className="log_creat">
                    <div>创建用户</div>
                    <div>忘记密码？</div>
                </div>
                <div className="log_login">
                    <div>快速登录</div>
                    <p>适合无密码或未注册账户</p>
                </div>
            </LoginNewsWrapper >
        );
    }
}