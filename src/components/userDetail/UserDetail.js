import React, { useEffect } from 'react'
import './userDetail.css'
import ReposList from './reposList/ReposList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRepos, getStarred, handleListData } from './userDetailAction'

const getUserData = () => {
  return JSON.parse(localStorage.getItem('userData'))
}

const User = props => {
  const {
    reposData,
    starredData,
    getRepos,
    getStarred,
    handleListData
  } = {...props}
  
  const userData = getUserData()
  const {
    avatar_url,
    login,
    html_url
   } = {...userData}

  useEffect(() => {
    getRepos(login)
    getStarred(login)
  },[])
  
  return (
    <>
      <div className="jumbotron bg-dark rounded-0 text-white">
        <div className="container">
          <div className="media flex-wrap">
            <img src={avatar_url} className="mr-3 mb-3 user-detail-avatar" alt="User detail avatar" />
            <div className="media-body">
              <h5 className="mt-0">{ login }</h5>
              {html_url}
              <div>
                <button className="btn btn-primary m-3" onClick={ () => handleListData(reposData, 'Repos') }>Repos</button>
                <button className="btn btn-primary m-3" onClick={ () => handleListData(starredData, 'Starred') }>Starred</button>
              </div>
            </div>
          </div>        
        </div>      
      </div>
      <div className="container">
        <ReposList />
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  reposData: state.userDetail.reposData,
  starredData: state.userDetail.starredData
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getRepos, getStarred, handleListData }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(User)