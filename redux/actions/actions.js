/**
 * Created by Manish on 8/4/2017.
 */
 let actions = {
    addtodo: function(text){
        return {
            type : 'ADD_TODO',
            text : text
        }
    },
    getapi: function(){
        return{
            type : 'GET_API',
            houses: actions.response
        }
    },
    getapisuccess: function() {
        return {
            type: 'GET_API_SUCCESS',
            houses: actions.response
        }
    },
    getCharaters : function () {
        return{
            type : 'GET_CHARACTERS',
            characters : actions.response
        }
    }
}

export default actions