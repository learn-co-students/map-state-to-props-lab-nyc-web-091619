import React, { Component } from 'react'
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <ul>
            {this.props.users.map(user => <li>{user.username}</li>)}
          </ul>
          <div>Total Users: {this.props.users.length}</div>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function msp(state){
  return {users: state.users}
}

// connect this component to Redux
export default connect(msp)(Users)
