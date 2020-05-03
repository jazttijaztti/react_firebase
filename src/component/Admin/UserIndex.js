import React, { Component } from 'react'
import Navigation from './Navigation.js'
import { render } from 'react-dom'
import firebase from "firebase";
import "firebase/storage";
//import { connect } from 'react-redux'
//import { firestoreConnect } from 'react-redux-firebase'
//import { compose } from 'redux'

class UserIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getFireData();
    }

    getFireData() {
        let db = firebase.database();
        let ref = db.ref("/users");
        let self = this;
        ref.once('value')
        .then(snapshot => {
            self.setState({
              data: snapshot.val()
            });
        });
      }

    getTableData() {
        let result = [];
        for (let i in this.state.data) {
          result.push(
            <tr key={i}>
              <td>{this.state.data[i].name}</td>
              <td>{this.state.data[i].gender}</td>
            </tr>
          );
        }
        return result;
    }
    render() {
        console.log(this.state.data)
        if (this.state.data.length == 0) {
            this.getFireData();
        }
        return (
            <table>
                <tbody>{this.getTableData()}</tbody>
            </table>
        );
    }
}

export default UserIndex;