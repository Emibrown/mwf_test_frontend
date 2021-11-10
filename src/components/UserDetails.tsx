import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { useForm, SubmitHandler } from "react-hook-form";
import * as actionTypes from "../store/actionTypes"

interface Props {
    setStep:any
}

type Inputs = {
    name: string,
    email: string
};

const UserDetails: React.FC<Props> = ({
    setStep
}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const user: IUser = useSelector(
        (state: AppState) => state.user,
        shallowEqual
    )
    const dispatch: Dispatch<any> = useDispatch()

    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch({type:actionTypes.ADD_USER,user: data})
        setStep(2)
    };

  return (
    <div style={{
        paddingTop:"30px",
        paddingRight:"50px",
        paddingLeft:"50px"
    }}>
      <div>
        <h5 style={{
            color:'#205081',
            textAlign:"center"
        }}>Register</h5>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
              <label>Name</label>
              <input type="text"  defaultValue={user.name?user.name:""} {...register("name", { required: true })} className="form-control"  placeholder="Enter your name"/>
              {errors.name?.type === "required" && <span style={{color:"red"}}>This field is required</span>}
          </div>
          <div className="form-group">
              <label>Email address</label>
              <input type="text" defaultValue={user.email?user.email:""} {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} className="form-control"  placeholder="Enter email"/>
              {errors.email?.type === "required" && <span style={{color:"red"}}>This field is required</span>}
              {errors.email?.type === "pattern" && <span style={{color:"red"}}>Email is not valid..</span>}
          </div>

          <input type="submit" value="Next" style={{
              display:"flex",
              backgroundColor:"#205081",
              color:"white",
              width:"100%",
              alignItems:"center",
              justifyContent:"center",
              padding:"10px 10px",
              marginTop:"30px",
              textDecoration:"none"
          }} />

      </form>
    </div>
  )

}

export default UserDetails