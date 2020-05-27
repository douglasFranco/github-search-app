const INITIAL_STATE = {
  title: '',
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'HANDLE_LIST':
      return {
        ...state,
        title: action.title,
        list: action.payload
      }
    default:
      return state
  }
}