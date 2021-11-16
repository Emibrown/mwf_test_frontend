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

type Register = {
    name: string,
    email: string,
    password: string 
}

type DispatchType = (args: UserAction) => UserAction