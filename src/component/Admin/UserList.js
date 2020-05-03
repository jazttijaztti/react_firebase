import React from 'react'

const UserList = ({user})=> {
    return (
      <div>
          <p>{user}</p>
      </div>
    )
}

const mapStateToProps = state => ({value: state.users})

export default UserList;