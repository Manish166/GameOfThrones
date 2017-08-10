/**
 * Created by Manish on 8/7/2017.
 */
import { takeEvery} from 'redux-saga';
import axios from 'axios';
import {call, put} from 'redux-saga/effects'
import actions from '../redux/actions/actions'

export function* gethouses(){
    try{
        const response = yield call(axios.get, 'https://anapioficeandfire.com/api/houses')
        const check= yield call(axios.get, 'https://anapioficeandfire.com/api/characters/823')
        console.log('checkname' + check.data.name)

        for (var i=0;i<10;i++){

            if (response.data[i].currentLord != undefined){
                console.log("check1" + response.data[i].currentLord)
                const responseLord = yield call(axios.get, 'https://anapioficeandfire.com/api/characters/823')
                console.log("check2" + responseLord.data.name)}
        }
        yield  put({type:'GET_API_SUCCESS', response : response.data})
    }catch (e) {
        console.log('request failed!')
        console.log(e)
    }
}

export default function* watchersaga() {
    yield takeEvery ('GET_API', gethouses)

}