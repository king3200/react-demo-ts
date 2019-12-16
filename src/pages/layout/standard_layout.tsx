import React, { useState } from 'react';
import { Menu, Layout, Icon as AntIcon } from 'antd';
import { IconProps } from 'antd/lib/icon/';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import CurdPage from '../curd/curd';
import LoginPage from '../login/login';
import DashboardPage from '../dashboard/dashboard';


const LogoStyle = styled.div`
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
`;

export const Icon = styled((props: IconProps) => <AntIcon {...props} />)`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: #1890ff;
    }
`;


const { Header, Sider, Content } = Layout;

const StandardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = (e: any): void => {
        console.log('123');
        setCollapsed(!collapsed);
    }

    return (
        <Layout>
            <Sider trigger={null} collapsed={collapsed} collapsible>
                <LogoStyle />
                <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
                    <Menu.Item key="1">
                        <Link to="/login">
                            <AntIcon type="pie-chart" />
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/curd">
                            <AntIcon type="desktop" />
                            <span>About</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/dashboard">
                            <AntIcon type="inbox" />
                            <span>Users</span>
                        </Link>
                    </Menu.Item>
                    {[4, 5, 6, 7, 8, 9, 10, 11].map(val => {
                        return (
                            <Menu.Item key={val}>
                                <Link to="/users">
                                    <AntIcon type="inbox" />
                                    <span>{val}</span>
                                </Link>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ backgroundColor: '#fff', textAlign: 'left', paddingLeft: '0px' }}>
                    <Icon
                        className="trigger"
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
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/curd">
                            <CurdPage />
                        </Route>
                        <Route path="/dashboard">
                            <DashboardPage />
                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
}

export default StandardLayout;
