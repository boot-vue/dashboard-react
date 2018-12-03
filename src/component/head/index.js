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
                <Button type="primary" className="btn-coll" onClick={() => {
                    this.props.changeCollapse(!this.props.isCollapse)
                }}>
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
        if (e.key === "logout") {
            this.props.logout()
        }
    }
}

const mapState = (state) => ({
    isCollapse: state.getIn(["nav", "isCollapsed"])
})
const mapDispatch = (dispatch) => ({
    logout() {//退出登录
        dispatch({
            type: 'logout'
        })
    },
    changeCollapse(isCollapse) {//触发导航栏收起/展开
        dispatch({
            type: 'collapse',
            value: isCollapse
        })
    }
})
export default connect(mapState, mapDispatch)(Head);