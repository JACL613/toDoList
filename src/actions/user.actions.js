import { closeUser, setUser } from '../reducer/user.reducer'

export const actionLogin = (data) => {
  return dispatch => {
    dispatch(setUser(data))
  }
}
export const actionLogout = () => {
  return dispatch => {
    dispatch(closeUser({}))
  }
}
