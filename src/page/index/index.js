import React, {Component} from "react";
import Nav from '../../component/nav';
import Head from '../../component/head';
import {Row, Col} from 'antd';
import './index.styl';

/*后台管理总页面*/
class Index extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    {/*左侧*/}
                    <Col span={3}>
                        <div className="logo">logo</div>
                        <Nav/>
                    </Col>
                    {/*右侧*/}
                    <Col>
                        <Head/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Index;