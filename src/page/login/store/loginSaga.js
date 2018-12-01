import {put, takeEvery} from 'redux-saga/effects';
import axios from '../../../util/axios';

function* saga() {
    yield takeEvery("login", login);
}

function* login(action) {
    const res = yield axios.post("/login", action.value);
    if (res.data.code === 200) {
        yield put({
            type: 'login_success',
            token: res.data.data
        })
    } else {
        yield put({
            type: 'login_error'
        })
    }
}

export {saga};