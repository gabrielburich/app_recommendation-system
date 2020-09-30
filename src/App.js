import React from 'react';
import { Layout } from 'antd';
import AppRouter from './router/AppRouter';

import HeaderMenu from '@commons/menu/HeaderMenu';

const { Header, Content } = Layout;

const App = () => {
    return (
        <Layout className={'app'}>
            <Header>
                <HeaderMenu />
            </Header>

            <Layout>
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
