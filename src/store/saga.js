import {saga as loginSaga} from '../page/login/store/loginSaga';
import {saga as navSaga} from '../component/nav/store/navSaga';
import {saga as headSaga} from '../component/head/store/headSaga';
import {fork, all} from 'redux-saga/effects';

/*组合saga*/
function* saga() {
    yield all([fork(loginSaga), fork(navSaga), fork(headSaga)])
}

export default saga;