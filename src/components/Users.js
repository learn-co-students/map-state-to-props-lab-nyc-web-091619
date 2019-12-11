import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {


  renderUsernames = () => {
    // debugger
    console.log("working")
    return (
      this.props.users.map((user) => {
        return <li> {user.username }</li>
      })
 
    )

  }

  render() {
     
    return (
      <div>
        <ul>
          Users!
          {this.renderUsernames()}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps (state) {
  return {users: state.users}

}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
