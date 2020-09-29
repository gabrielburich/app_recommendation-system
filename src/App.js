import React from 'react';
import {Layout} from "antd";
import AppRouter from "./router/AppRouter";
import AppMenu from "@commons/menu/AppMenu";
import HeaderMenu from "@commons/menu/HeaderMenu";

const {Header, Sider, Content} = Layout;

const App = () => {

    return (
        <Layout className={'app'}>
            <Header>
                <HeaderMenu />
            </Header>

            <Layout>
                <Sider width={200} className={'app-sider'}>
                    <AppMenu />
                </Sider>

                <Layout className={'app-content-area'}>
                    <Content className={'app-content'}>
                        <AppRouter />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;
