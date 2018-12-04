import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Menu, Icon} from 'antd';
import {Link, withRouter} from 'react-router-dom';

import './index.styl';

const SubMenu = Menu.SubMenu;

class Nav extends Component {
    constructor(props) {
        super(props);
        const {location} = this.props;
        let pathname = location.pathname;
        if (pathname === "/login") {
            pathname = "/index/home";
        }
        this.state = {
            defaultSelectedKeys: pathname
        }

    }

    render() {
        return (
            <Menu
                defaultSelectedKeys={[this.state.defaultSelectedKeys]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={false}
                className="menu"
            >
                <Menu.Item key="/index/home">
                    <Link to="/index/home">
                        <Icon type="pie-chart"/>
                        <span>首页</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/index/test">
                    <Link to="/index/test">
                        <Icon type="desktop"/>
                        <span>测试页</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="">
                        <Icon type="inbox"/>
                        <span>33333</span>
                    </Link>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="mail"/><span>系统管理</span></span>}>
                    <Menu.Item key="5"><Link to=""><span>111111</span></Link></Menu.Item>
                    <Menu.Item key="6"><Link to=""><span>2222</span></Link></Menu.Item>
                </SubMenu>
            </Menu>
        );
    }

    /*生命周期与其它方法*/
}

const mapState = (state) => ({
    isCollapsed: state.getIn(["nav", "isCollapsed"]) //是否是收起状态
})

export default connect(mapState, null)(withRouter(Nav));