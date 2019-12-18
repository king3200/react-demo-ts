import * as React from 'react';
import { Button, Row, Col, Form, Input, Card, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';
import styled from 'styled-components';
import Axios from 'axios';

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
`;

const RootDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const LoginCardBg = styled.div`
    background-color: lightgray;
    height: 100%;
`;

const BtnGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CenterDiv = styled.div`
    align-self: center;
`;

const heightStyle = {
    height: '100%'
}

const LoginForm = (props: FormComponentProps) => {
    let history = useHistory();

    const onSubmit = (e: any) => {
        e.preventDefault();

        const username = props.form.getFieldValue('username');
        const password = props.form.getFieldValue('password');

        console.log(username + '---' + password);
        Axios.post('http://39.104.99.231:3001/mock/17/api/auth/login/', { username, password })
            .then(val => {
                if (val.status === 200) {
                    console.log(val);
                    message.success('登陆成功');
                } else {
                    message.error('登陆失败:' + val.data)
                }
            });
    }

    const onRegist = (e: any) => {
        e.preventDefault();

        history.push('/regist');
    }

    return (
        <RootDiv>
            <Row style={heightStyle}>
                <Col span={14} style={heightStyle}>
                    <StyledImage src="http://www.hzscsj.cn/images/login_bg.jpg" alt="" />
                </Col>
                <Col span={10} style={heightStyle}>
                    <LoginCardBg>
                        <Card title="用户登录">
                            <Form onSubmit={onSubmit}>
                                <Form.Item label="用户名">
                                    {props.form.getFieldDecorator('username', {
                                        rules: [
                                            { required: true, message: '请输入用户名' },
                                        ],
                                    })(
                                        <Input placeholder='请输入手机号码/邮箱' />
                                    )}
                                </Form.Item>
                                <Form.Item label="密码">
                                    {props.form.getFieldDecorator('password', {
                                        rules: [
                                            { required: true, message: '请输入密码' },
                                            { min: 8, message: '密码必须大于8位' },
                                            { max: 20, message: '不能超过20位' }
                                        ],
                                    })(
                                        <Input type='password' placeholder='请输入密码，至少8位' />
                                    )}
                                </Form.Item>
                                <BtnGroup>
                                    <CenterDiv>
                                        <Button type='primary' htmlType='submit'>登陆</Button>
                                    </CenterDiv>
                                    <CenterDiv>
                                        <a href="/regist">注册</a>
                                    </CenterDiv>
                                </BtnGroup>
                            </Form>
                        </Card>
                    </LoginCardBg>
                </Col>
            </Row>
        </RootDiv>
    )
}

const LoginPage = Form.create<FormComponentProps>()(LoginForm);

export default LoginPage;