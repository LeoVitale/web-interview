import { API_ENDPOINT } from '../../config'

export const USER_REQUEST = 'babylon/app/USER_REQUEST'
export const USER_SUCCESS = 'babylon/app/USER_SUCCESS'
export const USER_FAILURE = 'babylon/app/USER_FAILURE'

export const NEW_USER_REQUEST = 'babylon/app/NEW_USER_REQUEST'
export const NEW_USER_SUCCESS = 'babylon/app/NEW_USER_SUCCESS'
export const NEW_USER_FAILURE = 'babylon/app/NEW_USER_FAILURE'

export const CHANGE_MEMBER = 'babylon/app/CHANGE_MEMBER'

const initialState = {
  user: {},
  loadingUser: false,
  error: false,
  memberSelected: null,
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
    case CHANGE_MEMBER:
      return {
        ...state,
        memberSelected: action.payload,
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

export const createNewUser = (member, callback) => dispatch =>
  dispatch({
    endpoint: `${API_ENDPOINT}/users`,
    method: 'POST',
    body: member,
    types: [NEW_USER_REQUEST, NEW_USER_SUCCESS, NEW_USER_FAILURE],
    callback: response => callback(response),
  })

export const changeMember = id => dispatch =>
  dispatch({
    type: CHANGE_MEMBER,
    payload: id,
  })
