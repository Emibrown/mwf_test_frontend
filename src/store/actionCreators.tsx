import * as actionTypes from "./actionTypes"

export const addUser = (user: IUser) => {
  const action: UserAction = {
    type: actionTypes.ADD_USER,
    user,
  }

  return handleAction(action)
}

export const handleAction =  (action: UserAction) =>(
  dispatch: DispatchType
) => {
  dispatch(action)
}