export const LOADING_FAMILY_MEMBERS = 'babylon/LOADING_FAMILY_MEMBERS'

const initialState = {
  members: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_FAMILY_MEMBERS:
      return {
        ...state,
        members: [],
      }
    default:
      return state
  }
}

export function loadFamilyMembers() {
  return dispatch => {}
}

// ACTIONS
export const loadingCategories = () => ({
  type: LOADING_FAMILY_MEMBERS,
})
