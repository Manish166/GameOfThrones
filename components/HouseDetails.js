/**
 * Created by Manish on 8/9/2017.
 */
import React, { Component } from 'react';
import actions from '../redux/actions/actions';
import {connect} from 'react-redux'

class HouseDetails extends Component{

    componentDidMount() {
        this.props.dispatch(actions.getapi());
    }

    render(){
        return (
            <ul>
                {this.props.houses.map((house) => {
                    return <li key={house.name}>{house.swornMembers}</li>
                })}
            </ul>
        )
    }
}
function mapStateToProps(state) {
    return ({
        houses : state.houses
    })
}

export default connect (mapStateToProps) (HouseDetails)