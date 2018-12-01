import {fromJS} from 'immutable';

const defaultState = fromJS({
    token: "",
    login_msg: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'login_success'://登陆成功
            return state.merge({
                token: action.token,
                login_msg: ''
            });
        case 'login_error'://登录失败
            return state.merge({
                token: '',
                login_msg: '用户名或密码不正确'
            });
        default:
            return state;

    }
}