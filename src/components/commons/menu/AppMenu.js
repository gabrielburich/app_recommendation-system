import React from "react";
import {Menu} from "antd";
import {useMenuItems} from "./useMenuItems";
import {HomeOutlined, PlusSquareOutlined, RestOutlined} from "@ant-design/icons";

const AppMenu = () => {

    const items = [
        {label: 'Home', icon: <HomeOutlined />, to: '/'},
        {label: 'Store', icon: <PlusSquareOutlined />, items: [
            {label: 'List', icon: <RestOutlined />, to: '/store/'}
        ]},
    ];

    const menuItems = useMenuItems(items);

    return (
        <Menu mode={'inline'} theme={'dark'}>
            {menuItems}
        </Menu>
    );
};

export default AppMenu;
