/**
 * Created by Manish on 8/4/2017.
 */
import initialState from './initialState'
function getIdtodos(state) {
    return state.todos.reduce((maxId, todo)=>{
        return Math.max(todo.id, maxId)
    }, -1) + 1
}
function getIdhouses(state) {
    return state.houses.reduce((maxId, house)=>{
            return Math.max(house.id, maxId)
        }, -1) + 1
}
let reducer=function(state=initialState, action){
    switch (action.type){
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos:[{
                    text : action.text,
                    completed : false,
                    id : getIdtodos(state)
                }, ...state.todos]
            })

        case 'GET_API':
            return Object.assign({}, state)

        case 'GET_API_SUCCESS':
            return Object.assign({}, state, {
                houses: action.response,
                }, ...state.houses)
            // return { ...state, houses: action.response}


        default :
            return state;
    }
}

export default reducer