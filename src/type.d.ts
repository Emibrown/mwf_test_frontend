interface IUser {
    name: string
    email: string 
}

type AppState = {
   user: IUser
}

type UserAction = {
    type: string
    user: IUser
}

type DispatchType = (args: UserAction) => UserAction