import React from "react";
import {Menu} from "antd";
import {useStoreActions} from "easy-peasy";

const HeaderMenu = () => {

    const {removeToken} = useStoreActions(state => state.loginModel);

    const actionByKey = {
        'logout': removeToken
    };

    const onClick = (item) => {
        const action = actionByKey[item.key];
        action && action();
    };

    return (
        <Menu mode={'horizontal'} theme={'dark'} onClick={onClick} className={'header-menu'}>
            <Menu.Item key={'logout'}>Logout</Menu.Item>
        </Menu>
    )

};

export default HeaderMenu;