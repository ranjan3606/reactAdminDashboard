import React, { Component } from 'react'
import SideBar from './sidebar/Sidebar'
import Header from './header/Header'


class index extends Component {
    
    render() {
        return (
            <div>
                <Header  />
                <SideBar />
            </div>
        )
    }
}
export default index
