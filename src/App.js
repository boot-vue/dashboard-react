import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './page/login';
import Index from "./page/index";
import Home from "./component/home";

/*路由控制*/
class App extends Component {

    render() {
        let {token} = this.props;//用户token
        if (token === "") {//token无效
            return (
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Redirect to="/login"/>
                    </Switch>
                </Router>
            )
        } else {//存在token
            return (
                <Router>
                    <Switch>
                        <Route path="/index" render={() => {
                            return (
                                <Index>
                                    <Switch>
                                        <Route path="/home" component={Home}/>
                                        <Redirect to="/home"/>
                                    </Switch>
                                </Index>
                            )
                        }}/>
                        <Route render={() => {//默认路由
                            return (
                                <Index>
                                    <Home/>
                                </Index>
                            )
                        }}/>
                    </Switch>
                </Router>
            )
        }
    }
}

const mapState = (state) => ({
    token: state.getIn(["login", "token"])//从store获取token
})

const mapDispatch = (dispatch) => ({
    //
})

export default connect(mapState, mapDispatch)(App);
