import {fromJS} from 'immutable';

const defaultState = fromJS({
    token: "",
    login_msg: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'login_success'://登陆成功
            localStorage.setItem("token", action.token);
            return state.merge({
                token: action.token,
                login_msg: ''
            });
        case 'login_error'://登录失败
            localStorage.removeItem("token");
            return state.merge({
                token: '',
                login_msg: '用户名或密码不正确'
            });
        case 'clear_error'://清除错误信息
            return state.set("login_msg", "");
        case 'log_out'://退出登录
            localStorage.removeItem("token");
            return state.set("token", "");
        case 'init_token':
            return state.set("token", action.value)
        default:
            return state;

    }
}