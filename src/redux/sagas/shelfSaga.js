import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

//generator function axio get- Tiana and Julie
function* getItems() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('/api/shelf', config);   
        yield put({ type: 'GET_ITEMS', payload: response.data });
    } catch (error) {
        console.log('shelf get request failed.', error);
    }
}

function* addItems(action) {
    try {
        yield axios.post('/api/shelf/items', action.payload );
        const nextAction = { type: 'FETCH_ITEMS' };
        yield put(nextAction);
    } catch (error) {
        console.log('Problem with adding items', error);
        alert('Something went wrong in addItems')
    }
}

function* shelfSaga() {
    yield takeLatest('FETCH_ITEMS', getItems);
    yield takeEvery('ADD_ITEMS', addItems);
}


export default shelfSaga;