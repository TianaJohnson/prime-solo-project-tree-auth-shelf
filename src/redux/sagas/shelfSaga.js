import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//generator function axio get- Tiana and Julie
function* getItems() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('api/shelf', config);
        yield put({ type: 'GET_ITEMS', payload: response.data });
    } catch (error) {
        console.log('shelf get request failed.', error);
    }
}

function* postItems() {
    try {

    } catch (error) {

    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_ITEMS', getItems);
}


export default shelfSaga;