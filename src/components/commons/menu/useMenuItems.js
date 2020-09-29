import {NavLink} from "react-router-dom";
import React from "react";
import {Menu} from 'antd';

export const useMenuItems = (menuItems) => {

    const createMenuItem = (item, index) => (
        <Menu.Item key={index}>
            <NavLink to={item.to}>
                {item.icon}
                <span>{item.label}</span>
            </NavLink>
        </Menu.Item>
    );

    const createSubmenu = (item, indexSubMenu) => (
        <Menu.SubMenu key={indexSubMenu} title={<span>{item.icon}{item.label}</span>}>
            {item.items.map((item, index) =>
                (!item.items)
                    ? createMenuItem(item, `subItem${indexSubMenu}${index}`)
                    : createSubmenu(item, `subMenu${indexSubMenu}${index}`)
            )}
        </Menu.SubMenu>
    );

    return menuItems.map((item, index) => (
        (!item.items) ? createMenuItem(item, index) : createSubmenu(item, index)
    ));
};
