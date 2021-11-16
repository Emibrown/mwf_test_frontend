import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import * as actionTypes from "../store/actionTypes"


interface Props {
  setStep:any
}

const Completed: React.FC<Props> = ({
  setStep,
}) => {
  const user: IUser = useSelector(
    (state: AppState) => state.user,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()

const home = () => {
  dispatch({type:actionTypes.ADD_USER,user:{name:null,email:null}})
  setStep(1)
}


  return (
    <div style={{
        paddingTop:"30px",
        paddingRight:"50px",
        paddingLeft:"50px"
    }}>
      <div>
        <h2 style={{
            color:'#205081',
            textAlign:"center"
        }}>Thanks <br/> <br/> {user.name} <br/> {user.email} <br/><br/> your Registration has been completed</h2>
      </div>
      <div style={{
        marginTop:"40px",
      }}>
        <a href="#" style={{
            color:"#205081"
        }} onClick={home}>Home</a>
      </div>

    </div>
  )

}

export default Completed