import React, {Component} from "react";
import Nav from '../../component/nav';
import Head from '../../component/head';
import {Layout} from 'antd';
import {connect} from 'react-redux';
import './index.styl';

const {
    Sider, Content,
} = Layout;

/*后台管理总页面*/
class Index extends Component {
    render() {
        return (
            <div className="container">
                <Layout>
                    <Sider breakpoint="md"
                           collapsible={true}
                           collapsed={this.props.isCollapsed}
                           trigger={null}
                           onBreakpoint={(broken) => {
                               this.props.changeCollapse(broken)
                           }}>
                        <div className="logo">logo</div>
                        <Nav/>
                    </Sider>
                    <Content>
                        <Head/>
                    </Content>
                </Layout>
            </div>
        )
    }
}

const mapState = (state) => ({
    isCollapsed: state.getIn(["nav", "isCollapsed"])
})
const mapDispatch = (dispatch) => ({
    changeCollapse(broken) {//折叠or展开
        dispatch({
            type: 'collapse',
            value: broken
        })
    }
})
export default connect(mapState, mapDispatch)(Index);