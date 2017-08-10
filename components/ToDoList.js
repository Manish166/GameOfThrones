/**
 * Created by Manish on 8/4/2017.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'

class ToDoList extends Component{

    render(){
        return (
            <ul>
                {
                    this.props.todos.map((todo) => {
                        return <li key={todo.id}>{todo.text}</li>
                    })
                }
            </ul>
        )
    }
}
function mapStateToProps(state) {
    return ({
        todos : state.todos
    })
}

export default connect (mapStateToProps)(ToDoList)