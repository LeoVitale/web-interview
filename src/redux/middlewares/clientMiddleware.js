const clientMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  const { endpoint, method, body, callback, types, ...rest } = action
  if (!endpoint) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILURE] = types
  next({ ...rest, type: REQUEST })

  const params = body
    ? {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    : null

  const actionPromise = fetch(endpoint, {
    method: method ? method : 'GET',
    ...params,
  })
  actionPromise
    .then(res => res.json())
    .then(
      payload => {
        if (callback) {
          callback(payload)
        }
        return next({ ...rest, payload, type: SUCCESS })
      },
      error => next({ ...rest, error, type: FAILURE })
    )
    .catch(error => {
      console.error('MIDDLEWARE ERROR:', error)
      next({ ...rest, error, type: FAILURE })
    })

  return actionPromise
}

export default clientMiddleware
