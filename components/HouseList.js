/**
 * Created by Manish on 8/8/2017.
 */
import React, { Component } from 'react';
import actions from '../redux/actions/actions';
import {connect} from 'react-redux'
import HouseTableElement from './HouseTableElement'
import {Table} from 'react-bootstrap'


class HouseList extends Component{

    componentDidMount() {
        this.props.dispatch(actions.getapi());
    }

    render(){

        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>House Name</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.houses.map((house, index) => {
                        return (
                            <HouseTableElement key={house.name} house={house}/>
                        )})}
                </tbody>
            </Table>
            // <ul>
            //     {this.props.houses.map((house) => {
            //         return <li key={house.name}>{house.name}</li>
            //     })}
            // </ul>
        )
    }
}
function mapStateToProps(state) {
    return ({
        houses : state.houses
    })
}

export default connect (mapStateToProps) (HouseList)