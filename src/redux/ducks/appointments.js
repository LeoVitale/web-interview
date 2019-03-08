import { API_ENDPOINT } from '../../config'

export const APPOINTMENTS_REQUEST = 'babylon/appointments/APPOINTMENTS_REQUEST'
export const APPOINTMENTS_SUCCESS = 'babylon/appointments/APPOINTMENTS_SUCCESS'
export const APPOINTMENTS_FAILURE = 'babylon/appointments/APPOINTMENTS_FAILURE'

export const AVAILABLE_SLOTS_REQUEST =
  'babylon/appointments/AVAILABLE_SLOTS_REQUEST'
export const AVAILABLE_SLOTS_SUCCESS =
  'babylon/appointments/AVAILABLE_SLOTS_SUCCESS'
export const AVAILABLE_SLOTS_FAILURE =
  'babylon/appointments/AVAILABLE_SLOTS_FAILURE'

const initialState = {
  appointments: [],
  loadAppointments: false,
  availableSlots: [],
  loadASlots: false,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENTS_REQUEST:
      return {
        ...state,
        loadAppointments: true,
        appointments: [],
        error: false,
      }
    case APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loadAppointments: false,
        appointments: action.payload,
        error: false,
      }
    case APPOINTMENTS_FAILURE:
      return {
        ...state,
        loadAppointments: false,
        appointments: action.payload,
        error: true,
      }
    default:
      return state
  }
}

export const loadAppointments = () => dispatch =>
  dispatch({
    endpoint: `${API_ENDPOINT}/appointments`,
    types: [APPOINTMENTS_REQUEST, APPOINTMENTS_SUCCESS, APPOINTMENTS_FAILURE],
  })

export const loadSlots = () => dispatch =>
  dispatch({
    endpoint: `${API_ENDPOINT}/availableSlots`,
    types: [
      AVAILABLE_SLOTS_REQUEST,
      AVAILABLE_SLOTS_SUCCESS,
      AVAILABLE_SLOTS_FAILURE,
    ],
  })
