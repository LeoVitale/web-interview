import { API_ENDPOINT } from '../../config'

export const FAMILY_MEMBERS_REQUEST = 'babylon/app/FAMILY_MEMBERS_REQUEST'
export const FAMILY_MEMBERS_SUCCESS = 'babylon/app/FAMILY_MEMBERS_SUCCESS'
export const FAMILY_MEMBERS_FAILURE = 'babylon/app/FAMILY_MEMBERS_FAILURE'

export const USER_REQUEST = 'babylon/app/USER_REQUEST'
export const USER_SUCCESS = 'babylon/app/USER_SUCCESS'
export const USER_FAILURE = 'babylon/app/USER_FAILURE'

const initialState = {
  familyMembers: [],
  loadingFamilyMembers: false,
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
    case FAMILY_MEMBERS_REQUEST:
      return {
        ...state,
        familyMembers: [],
        loadingFamilyMembers: true,
        error: false,
      }
    case FAMILY_MEMBERS_SUCCESS:
      return {
        ...state,
        familyMembers: action.payload,
        loadingFamilyMembers: false,
        error: false,
      }
    case FAMILY_MEMBERS_FAILURE:
      return {
        ...state,
        familyMembers: [],
        loadingFamilyMembers: false,
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

export const loadUserFamilyMembers = id => dispatch =>
  dispatch({
    endpoint: `${API_ENDPOINT}/users/${id}/family-members`,
    types: [
      FAMILY_MEMBERS_REQUEST,
      FAMILY_MEMBERS_SUCCESS,
      FAMILY_MEMBERS_FAILURE,
    ],
  })
