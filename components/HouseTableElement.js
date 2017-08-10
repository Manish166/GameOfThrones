/**
 * Created by Manish on 8/9/2017.
 */
/**
 * Created by Manish on 8/8/2017.
 */
import React, { Component } from 'react';
import actions from '../redux/actions/actions';
import {connect} from 'react-redux'

class HouseTableElement extends Component{

    render(){
        const house = this.props.house;
        return (
            <tr>
                <th>{house.name}</th>
            </tr>

            // <ul>
            //     {this.props.houses.map((house) => {
            //         return <li key={house.name}>{house.name}</li>
            //     })}
            // </ul>
        )
    }
}


export default HouseTableElement