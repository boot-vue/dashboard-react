import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './page/login';
import Index from "./page/index";
import Home from "./component/home";
import Test from './component/test';

/*路由控制*/
class App extends Component {

    render() {
        let token = localStorage.getItem("token");//用户token
        if (!token) {//token无效
            return (
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Redirect to="/login"/>
                    </Switch>
                </Router>
            )
        } else {//存在token
            this.props.init(token)
            return (
                <Router>
                    <Route path="/" render={() => {
                        return (
                            <Index>
                                <Switch>
                                    <Route exact path="/index/home" component={Home}/>
                                    <Route exact path="/index/test" component={Test}/>
                                    <Redirect to="/index/home"/>
                                </Switch>
                            </Index>
                        )
                    }}/>
                </Router>
            )
        }
    }
}

const mapState = (state) => ({
    token: state.getIn(["login", "token"])//从store获取token
})

const mapDispatch = (dispatch) => ({
    init(token) {
        dispatch({
            type: 'init_token',
            value: token
        })
    }
})

export default connect(mapState, mapDispatch)(App);
