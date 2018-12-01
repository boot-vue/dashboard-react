import {saga as loginSaga} from '../page/login/store/loginSaga';
import {fork, all} from 'redux-saga/effects'

function* saga() {
    yield all([fork(loginSaga)])
}

export default saga;