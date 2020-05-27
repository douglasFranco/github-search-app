import axios from 'axios'

const getRepos = (name) => {
  return (dispatch) => {
    axios.get(`https://api.github.com/users/${name}/repos`)
    .then(resp => {
      dispatch({type: 'GET_REPOS', payload: resp.data})
      dispatch({
        type: 'HANDLE_LIST',
        title: 'Repos',
        payload: resp.data
      })
    })
  }
}

const getStarred = (name) => {
  return (dispatch) => {
    axios.get(`https://api.github.com/users/${name}/starred`)
    .then(resp => {
      dispatch({type: 'GET_STARRED', payload: resp.data})
    })
  }
}

const handleListData = (data, title) => {
  return (
    {
      type: 'HANDLE_LIST',
      title: title,
      payload: data
    }
  )
}

export { getRepos, getStarred, handleListData}