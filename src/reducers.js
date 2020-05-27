import {combineReducers} from 'redux'
import searchReducer from './components/search/searchReducer'
import usersListReducer from './components/usersList/usersListReducer'
import userDetailReducer from './components/userDetail/userDetailReducer'
import reposListReducer from './components/userDetail/reposList/reposListReducer'

const rootReducer = combineReducers({
    search : searchReducer,
    usersList: usersListReducer,
    userDetail: userDetailReducer,
    reposList: reposListReducer
})

export default rootReducer
