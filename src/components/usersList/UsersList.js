import React from 'react'
import Card from '../card/Card'
import Search from '../search/Search'
import { connect } from 'react-redux'
import electrocat from '../../assets/electrocat.png'
import './usersList.css'

const showUserDetails = userData => {
  localStorage.setItem('userData', JSON.stringify(userData))
  window.open('http://localhost:3000/#/user')
}

const UsersList = props => {
  const { list } = {...props}

  return (
    <div className="container">
      <Search />
      {list.length <= 0 && 
      <div className="intro-image-wrapper">
        <img src={ electrocat } alt="Electrocat"/>
      </div>
      }
      <div className="d-flex flex-row flex-wrap justify-content-center" >
        {list.map(user => {
          return (
            <div onClick={() => showUserDetails(user)}>
              <Card image={user.avatar_url} title={user.login} text={user.html_url}/>
            </div>           
          )       
        })}
      </div>
    </div>          
  )
} 

const mapStateToProps = state => ({
  list: state.usersList.list
})
export default connect(mapStateToProps)(UsersList)