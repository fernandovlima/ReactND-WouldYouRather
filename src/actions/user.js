export const REQUEST_AUTH = "REQUEST_AUTH"

export function requestAuth(user) {
  return {
    type: REQUEST_AUTH,
    payload: user
  }
}
