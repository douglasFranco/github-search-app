import React from 'react'
import { connect } from 'react-redux'

const ReposList = props => {
  const { title, list } = { ...props }

  return ( list.length > 0 &&
    <>
      <h2>{title}</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">URL</th>            
          </tr>
        </thead>
        <tbody>
          {list && list.map(item => {
            return (
              <tr>
                <td>{item.full_name}</td>
                <td>{item.html_url}</td>
              </tr>
            )
          })}                  
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = state => ({
  title: state.reposList.title,
  list: state.reposList.list
})

export default connect(mapStateToProps)(ReposList)