import React, {Component} from "react";
import './index.styl';
import {Form, Icon, Input, Button, Row, Col, Divider, message} from 'antd';
import {connect} from 'react-redux';

const FormItem = Form.Item;

class Login extends Component {

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={(e) => {
                this.checkLogin(e)
            }} className="login">
                <Row>
                    <Col span={8} offset={8}>
                        <Divider className="title">后台管理</Divider>
                    </Col></Row>
                <Row>
                    <Col span={8} offset={8}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入用户名'}],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="请输入用户名"/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={8}>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                       placeholder="请输入密码"/>
                            )}
                        </FormItem>
                    </Col></Row>
                <Row>
                    <Col span={8} offset={8}>
                        <FormItem>
                            <Button type="primary" htmlType="submit" block>
                                Log in
                            </Button>
                        </FormItem>
                    </Col></Row>
            </Form>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let {login_msg} = this.props;
        if (login_msg !== "") {
            message.error(login_msg)
        }
    }

    /*登录检查*/
    checkLogin(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values)
            }
        });
    }
}

const LoginForm = Form.create()(Login);

const mapState = (state) => {
    return {
        login_msg: state.getIn(["login", "login_msg"])//从store获取登录的错误信息
    }
}

const mapDispatch = (dispatch => ({//登录
    login(data) {//用户名与密码
        dispatch({
            type: 'login',
            value: data
        })
    }
}))
export default connect(mapState, mapDispatch)(LoginForm);