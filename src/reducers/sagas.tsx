import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';
import { LOGIN_GET } from '../common/urls';

interface Map {
    [key: string]: any;
    [index: number]: any;
}

function post(url: string, params: object): any {
    return Axios.post(url, params);
}

function get(url: string, params: Map): any {
    if (params !== null) {
        let sub_params: string = '?'
        for (let key in params) {
            sub_params += key + '=' + params[key].toString() + '&';
        }
        return Axios.get(sub_params);
    }
    return Axios.get(url);
}

function* loginSaga(action: any) {
    const params = { username: action.payload.username, password: action.payload.password };
    const userData = yield call(post, LOGIN_GET, params);

    if (userData.status === 200) {
        console.log(userData);
        yield put({ type: 'setUserData', payload: { username: 'tidus', token: userData.data.token } })
    }
}

function* logoutSaga(action: any) {
    const result = yield call()
}

export function* mySaga() {
    yield takeLatest('login', loginSaga);
}

