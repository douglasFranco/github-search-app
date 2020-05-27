import axios from 'axios'

const changeInputValue = event => {
  return {
    type: 'INPUT_CHANGED',
    payload: event.target.value
  }
}

const pageChange = (pageNumber) => {
  return {type: 'USERSLIST_PAGECHANGE', payload: pageNumber}
}

const search = (term, pageNumber = 1) => {
  console.log('term', term)
  console.log('pageNumber', pageNumber)
  return (dispatch) => {
    axios.get(`https://api.github.com/search/users?q=${term}&page=${pageNumber}&per_page=20`)
    .then(resp => {
      console.log('action', resp.data.total_count)
      dispatch({
        type: 'SEARCH', 
        totalCount: resp.data.total_count,
        payload: resp.data.items
      })
    })
  }
}

export { changeInputValue, search, pageChange }