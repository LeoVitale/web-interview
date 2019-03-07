export const LOADING_APPOINTMEMTS = 'babylon/LOADING_APPOINTMEMTS'

const initialState = {
  appointments: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_APPOINTMEMTS:
      return {
        ...state,
        appointments: [],
      }
    default:
      return state
  }
}

export function loadAppointments() {
  return dispatch => {}
}

// ACTIONS
export const loadingCategories = () => ({
  type: LOADING_APPOINTMEMTS,
})
