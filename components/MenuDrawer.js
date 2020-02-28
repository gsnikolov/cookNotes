import React from 'react'
import {Drawer} from 'native-base'
import SideBar from './SideBar.js'

const MenuDrawer = (props) => {
    return (
        <Drawer open={props.open} content={<SideBar/>}>
            {props.content}
        </Drawer>
    )
}

export default MenuDrawer