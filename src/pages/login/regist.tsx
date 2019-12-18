import React, { createRef, Ref } from 'react';
import styled from 'styled-components';
import { Form, Row, Col, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { useHistory } from 'react-router';
import Axios from 'axios';


const RootDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const RegistForm = (props: FormComponentProps) => {

    const history = useHistory();
    const formRef = createRef<Ref<any>>();

    const onBack = () => {
        history.push('/login');
    }

    const onSubmit = (e: any) => {
        console.log('1111111');
    }

    return (
        <RootDiv>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <Form.Item label="用户名">
                            {props.form.getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '请输入用户名' },
                                    { pattern: RegExp('/^[1]([3-9])[0-9]{9}$/'), message: '用户名只能为手机号' }
                                ]
                            })}
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label="密码">
                            {props.form.getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: '请输入密码', min: 8, max: 20 },
                                ]
                            })}
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label="确认密码">
                            {props.form.getFieldDecorator('password_confirm', {
                                rules: [
                                    { required: true, message: '请再次输入密码', min: 8, max: 20 },
                                ],
                            })}
                        </Form.Item>
                    </Col>
                    <Col>
                        <Button type="primary" htmlType="submit">注册</Button>
                        <Button onClick={onBack}>返回首页</Button>
                    </Col>
                </Row>
            </Form>

        </RootDiv>
    )
}

const RegistPage = Form.create<FormComponentProps>()(RegistForm);

export default RegistPage;