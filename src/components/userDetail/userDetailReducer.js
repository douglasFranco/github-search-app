const INITIAL_STATE = {
  reposData: [],  
  starredData: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case 'GET_REPOS':
        return { ...state, reposData: action.payload }
      case 'GET_STARRED':
        return { ...state, starredData: action.payload }
      default:
        return state
  }
}