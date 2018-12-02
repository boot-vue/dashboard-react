import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Icon, Dropdown, Menu} from 'antd';
import './index.styl';


/*头部*/
class Head extends Component {
    render() {
        const menu = (
            <Menu onClick={(e => {
                this.handleClick(e)
            })}>
                <Menu.Item key="logout">
                    退出登录
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="head">
                <Button type="primary" className="btn-coll">
                    <Icon type="menu-fold"/>
                </Button>
                <Dropdown overlay={menu} placement="bottomCenter" className="config">
                    <Button>其它选项</Button>
                </Dropdown>
            </div>
        );
    }

    /*生命周期与其它方法*/

    handleClick = (e) => {
        switch (e.key) {
            case "logout":
                this.props.logout()
                break;
        }
    }
}


const mapDispatch = (dispatch) => ({
    logout() {//退出登录
        dispatch({
            type: 'logout'
        })
    }
})
export default connect(null, mapDispatch)(Head);