import * as actionTypes from "./actionTypes"

const initialState: AppState = {
    user: {
        name: "",
        email: "",
    }
}

const reducer = (
    state: AppState = initialState,
    action: UserAction
  ): AppState => {
    switch (action.type) {
      case actionTypes.ADD_USER:
        return {
          user: {...state.user, ...action.user},
        }
    }
    return state
  }
  
  export default reducer