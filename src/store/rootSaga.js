import { all, fork } from 'redux-saga/effects';
import pointers from '../pointers/saga';


export default function* rootSaga() {
    yield all([
        pointers.map(fork),
    ]);
}
