import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import { NavWrapper } from "./style"
import { connect } from "react-redux"
import { WEEK_ACTION_ASYNC } from "@actions/week"

// import { charleskeiths } from "@api/goods"

class Nav extends Component {
    render() {
        return (

            < NavWrapper >
                <div className="nav">
                    <ul>
                        <NavLink to="/shopping/news">
                            <li>新品</li>
                        </NavLink>
                        <NavLink to="/shopping/cools">
                            <li className="cool">人气推荐</li>
                        </NavLink>

                        <li>鞋履</li>
                        <li>包袋</li>
                        <li>配饰</li>
                        <li>儿童</li>
                        <li>折扣</li>
                    </ul>
                </div>
            </NavWrapper >
        );
    }
    componentDidMount() {
        this.props.handleAsyncWeek()
    }
}
const mapStateToProps = (state) => ({
    charleskeiths: state.goods.charleskeiths
})
const mapDisPathToProps = (dispatch) => ({
    handleAsyncWeek() {
        dispatch(WEEK_ACTION_ASYNC())
    }
})

export default connect(mapStateToProps, mapDisPathToProps)(Nav)