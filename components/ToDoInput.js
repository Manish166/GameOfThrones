/**
 * Created by Manish on 8/4/2017.
 */
import React, { Component } from 'react';
import actions from '../redux/actions/actions';
import { connect } from 'react-redux';


class ToDoInput extends Component{
    constructor(props, context){
        super(props, context)
        this.state={
            inputText : ''
        }
    }

    handleChange(event) {
        this.setState({
            inputText:event.target.value
        })
    }
    handleSubmit (event){
        event.preventDefault();
        this.props.dispatch(actions.addtodo(this.state.inputText))
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text"
                           placeholder="this is text"
                           value = {this.state.inputText}
                           onChange={this.handleChange.bind(this)}>
                    </input>
                    <input type="submit"
                           value="Submit">
                    </input>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return ({
        todos : state.todos
    })
}
export default connect (mapStateToProps)(ToDoInput);