import axios from 'axios';
import store from '../../store';

axios.defaults.baseURL = "";  //请求url
axios.defaults.headers['Content-Type'] = "application/json";
axios.defaults.timeout = 5000;

axios.defaults.transformRequest = [(params) => {//全局带上token
    if (!params) {
        params = {}
    }
    params.token = store.getState().getIn(["login", "token"])
    return params
}]

axios.defaults.transformResponse = [(res) => {
    //处理全局响应
    let result = JSON.parse(res)  //token失效的, 触发logout清除store里的token


    return result
}]


export default axios;