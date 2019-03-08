import { API_ENDPOINT } from '../../config'

export const CLEAR_FAMILY = 'babylon/CLEAR_FAMILY'

export const FAMILY_REQUEST = 'babylon/family-members/FAMILY_REQUEST'
export const FAMILY_SUCCESS = 'babylon/family-members/FAMILY_SUCCESS'
export const FAMILY_FAILURE = 'babylon/family-members/FAMILY_FAILURE'

const initialState = {
  members: [],
  loading: false,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FAMILY_REQUEST:
      return {
        ...state,
        members: [],
        loading: true,
        error: false,
      }
    case FAMILY_SUCCESS:
      return {
        ...state,
        members: [...state.members, action.payload],
        loading: false,
        error: false,
      }
    case FAMILY_FAILURE:
      return {
        ...state,
        members: [],
        error: true,
      }
    default:
      return state
  }
}

export const loadMember = id => dispatch =>
  dispatch({
    endpoint: `${API_ENDPOINT}/users/${id}`,
    types: [FAMILY_REQUEST, FAMILY_SUCCESS, FAMILY_FAILURE],
  })
