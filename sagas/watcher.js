/**
 * Created by Manish on 8/7/2017.
 */
import { takeEvery} from 'redux-saga';
import axios from 'axios';
import {call, put} from 'redux-saga/effects'
import {getHousesApi} from './Api/getHousesApi'
import actions from '../redux/actions/actions'
import {gethouses} from './workerSaga'


export default function* watchersaga() {
    yield takeEvery ('GET_API', gethouses)

}