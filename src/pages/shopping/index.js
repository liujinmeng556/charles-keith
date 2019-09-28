import React, { Component } from 'react';

import Header from "@components/header"
import Nav from "@components/nav"
import TabBar from "@common/tabBar"

export default class Shopping extends Component {
    render() {
        return (

            <div className="shopping">
                <Header />
                <Nav />
                <TabBar />
            </div>

        )
    }



}