import { API_ENDPOINT } from '../../config'

export const APPOINTMENTS_REQUEST = 'babylon/appointments/APPOINTMENTS_REQUEST'
export const APPOINTMENTS_SUCCESS = 'babylon/appointments/APPOINTMENTS_SUCCESS'
export const APPOINTMENTS_FAILURE = 'babylon/appointments/APPOINTMENTS_FAILURE'

export const NEW_APPOINTMENT_REQUEST =
  'babylon/appointments/NEW_APPOINTMENT_REQUEST'
export const NEW_APPOINTMENT_SUCCESS =
  'babylon/appointments/NEW_APPOINTMENT_SUCCESS'
export const NEW_APPOINTMENT_FAILURE =
  'babylon/appointments/NEW_APPOINTMENT_FAILURE'

export const AVAILABLE_SLOTS_REQUEST =
  'babylon/appointments/AVAILABLE_SLOTS_REQUEST'
export const AVAILABLE_SLOTS_SUCCESS =
  'babylon/appointments/AVAILABLE_SLOTS_SUCCESS'
export const AVAILABLE_SLOTS_FAILURE =
  'babylon/appointments/AVAILABLE_SLOTS_FAILURE'

const initialState = {
  booked: [],
  loadAppointments: false,
  hasNewAppointment: false,
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
        hasNewAppointment: false,
        booked: [],
        error: false,
      }
    case APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loadAppointments: false,
        booked: action.payload,
        error: false,
      }
    case NEW_APPOINTMENT_FAILURE:
    case APPOINTMENTS_FAILURE:
      return {
        ...state,
        loadAppointments: false,
        booked: action.payload,
        error: true,
      }

    case NEW_APPOINTMENT_REQUEST:
      return {
        ...state,
        hasNewAppointment: false,
        error: false,
      }
    case NEW_APPOINTMENT_SUCCESS:
      return {
        ...state,
        hasNewAppointment: true,
        booked: [...state.booked, action.payload],
        error: false,
      }
    case AVAILABLE_SLOTS_REQUEST:
      return {
        ...state,
        loadASlots: true,
        availableSlots: [],
        error: false,
      }
    case AVAILABLE_SLOTS_SUCCESS:
      return {
        ...state,
        loadASlots: false,
        availableSlots: action.payload,
        error: false,
      }
    case AVAILABLE_SLOTS_FAILURE:
      return {
        ...state,
        loadASlots: false,
        availableSlots: action.payload,
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

export const newAppointment = appointment => dispatch =>
  dispatch({
    endpoint: `${API_ENDPOINT}/appointments`,
    method: 'POST',
    body: appointment,
    types: [
      NEW_APPOINTMENT_REQUEST,
      NEW_APPOINTMENT_SUCCESS,
      NEW_APPOINTMENT_FAILURE,
    ],
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
