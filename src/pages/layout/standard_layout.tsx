import React, { useState } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import * as styles from "./standard_layout.less";

const { Header, Sider, Content } = Layout;

const StandardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = (e: any): void => {
        console.log('123');
        setCollapsed(!collapsed);
    }

    return (
        <Router>
            <Layout>
                <Sider trigger={null} collapsed={collapsed} collapsible>
                    <div className={styles.logo} />
                    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="pie-chart" />
                                <span>Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/about">
                                <Icon type="desktop" />
                                <span>About</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/users">
                                <Icon type="inbox" />
                                <span>Users</span>
                            </Link>
                        </Menu.Item>
                        {[4, 5, 6, 7, 8, 9, 10, 11].map(val => {
                            return (
                                <Menu.Item key={val}>
                                    <Link to="/users">
                                        <Icon type="inbox" />
                                        <span>{val}</span>
                                    </Link>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className={styles.menu_layout_header}>
                        <Icon
                            className={styles.trigger}
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={toggleCollapsed}
                        />
                    </Header>
                    <Content style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                    }}>
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/users">
                                <Users />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
}

export default StandardLayout;

const Home = () => {
    return <h2>Home</h2>;
}

const About = () => {
    return <h2>About</h2>
}

const Users = () => {
    return <h2>Users</h2>
}