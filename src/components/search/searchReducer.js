const INITIAL_STATE = {
  inputData: '',  
  searchTerm: '',
  totalCount: '',
  pageNumber: 1,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case 'INPUT_CHANGED':
        return {
          ...state, 
          inputData: action.payload,
          searchTerm: action.payload
        }
      case 'USERSLIST_PAGECHANGE':
          return { ...state, pageNumber: action.payload }
      case 'SEARCH':
        return { 
          ...state, 
          inputData: '',
          totalCount: action.totalCount
        }
      default:
        return state
  }
}