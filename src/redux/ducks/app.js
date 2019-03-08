import { API_ENDPOINT } from '../../config'

export const USER_REQUEST = 'babylon/app/USER_REQUEST'
export const USER_SUCCESS = 'babylon/app/USER_SUCCESS'
export const USER_FAILURE = 'babylon/app/USER_FAILURE'

const initialState = {
  user: {},
  loadingUser: false,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        user: {},
        loadingUser: true,
        error: false,
      }
    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loadingUser: false,
        error: false,
      }
    case USER_FAILURE:
      return {
        ...state,
        user: {},
        loadingUser: false,
        error: true,
      }
    default:
      return state
  }
}

export const loadUser = id => dispatch =>
  dispatch({
    endpoint: `${API_ENDPOINT}/users/${id}`,
    types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
  })
