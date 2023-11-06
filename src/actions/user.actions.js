import { setUser } from '../reducer/user.reducer'

export const actionLogin = (data) => {
  return dispatch => {
    dispatch(setUser(data))
  }
}
