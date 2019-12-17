import React, { useState } from 'react';
import { Menu, Layout, Icon as AntIcon, Button, Avatar } from 'antd';
import { IconProps } from 'antd/lib/icon/';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Routes from '../routes';
// import Routes from '../routes';


const LogoStyle = styled.div`
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
`;

const HeaderUserState = styled.div`
    display: inline-block;

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

const StandardLayout = (props: any) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = (e: any): void => {
        console.log('123');
        setCollapsed(!collapsed);
    }

    const loginBtnClick = (): void => {
        console.log(props);
    }

    return (
        <Layout>
            <Sider trigger={null} collapsed={collapsed} collapsible>
                <LogoStyle />
                <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
                    <Menu.Item key="1">
                        <Link to="/menu/dashboard">
                            <AntIcon type="pie-chart" />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/menu/curd">
                            <AntIcon type="desktop" />
                            <span>Curd</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/menu/user">
                            <AntIcon type="inbox" />
                            <span>Users</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ backgroundColor: '#fff', textAlign: 'left', paddingLeft: '0px' }}>
                    <HeaderUserState>
                        <Icon
                            className="trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={toggleCollapsed}
                        />
                    </HeaderUserState>
                    <HeaderUserState>
                        <Avatar icon="user" />
                        <span>请登录</span>
                        <Button onClick={loginBtnClick}>
                            点击登陆
                        </Button>
                    </HeaderUserState>

                </Header>
                <Content style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                }}>
                    <Routes />
                </Content>
            </Layout>
        </Layout>
    );
}

export default StandardLayout;
