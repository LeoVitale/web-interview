const clientMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  const { endpoint, types, ...rest } = action
  if (!endpoint) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILURE] = types
  next({ ...rest, type: REQUEST })

  const actionPromise = fetch(endpoint)
  actionPromise
    .then(res => res.json())
    .then(
      payload => next({ ...rest, payload, type: SUCCESS }),
      error => next({ ...rest, error, type: FAILURE })
    )
    .catch(error => {
      console.error('MIDDLEWARE ERROR:', error)
      next({ ...rest, error, type: FAILURE })
    })

  return actionPromise
}

export default clientMiddleware
