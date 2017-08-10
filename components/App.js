/**
 * Created by Manish on 8/3/2017.
 */
import React, { Component } from 'react';
import ToDOInput from  './ToDoInput';
import ToDoList from './ToDoList';
import HouseList from'./HouseList'
import {connect} from 'react-redux';

class App extends Component{
    render(){
        return (
            <div>
                <h1>just the environment setup!</h1>
                <HouseList/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(App);