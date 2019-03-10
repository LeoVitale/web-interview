import { API_ENDPOINT } from '../../config'
import { createNewUser } from './app'

export const CLEAR_FAMILY = 'babylon/family-members/CLEAR_FAMILY'
export const ADD_MEMBER = 'babylon/family-members/ADD_MEMBER'

export const FAMILY_REQUEST = 'babylon/family-members/FAMILY_REQUEST'
export const FAMILY_SUCCESS = 'babylon/family-members/FAMILY_SUCCESS'
export const FAMILY_FAILURE = 'babylon/family-members/FAMILY_FAILURE'

export const NEW_MEMBER_REQUEST = 'babylon/family-members/NEW_MEMBER_REQUEST'
export const NEW_MEMBER_SUCCESS = 'babylon/family-members/NEW_MEMBER_SUCCESS'
export const NEW_MEMBER_FAILURE = 'babylon/family-members/NEW_MEMBER_FAILURE'

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
        members: [...state.members],
        loading: true,
        error: false,
      }
    case ADD_MEMBER:
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
    case NEW_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case NEW_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      }
    case NEW_MEMBER_FAILURE:
      return {
        ...state,
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

export const addNewMember = (id, member) => dispatch => {
  return dispatch(
    createNewUser(member, user => {
      const newMember = {
        id: user.id,
        userId: id,
      }
      dispatch(addMember(user))
      dispatch({
        endpoint: `${API_ENDPOINT}/family-members`,
        method: 'POST',
        body: newMember,
        types: [NEW_MEMBER_REQUEST, NEW_MEMBER_SUCCESS, NEW_MEMBER_FAILURE],
      })
    })
  )
}

export const loadUserFamilyMembers = id => dispatch => {
  fetch(`${API_ENDPOINT}/users/${id}/family-members`)
    .then(res => res.json())
    .then(members => {
      members.forEach(member => dispatch(loadMember(`/${member.id}`)))
    })
}

export const addMember = member => dispatch =>
  dispatch({
    type: ADD_MEMBER,
    payload: member,
  })
