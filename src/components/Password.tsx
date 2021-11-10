import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import {
    useNavigate
} from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";


// const baseUrl = "http://127.0.0.1:8080"

const baseUrl = "https://mwf-test-backend.cleverapps.io"


interface Props {
    setStep:any
    setError:any
}

type Inputs = {
    password: string,
    confirm_password: string
};

const Password: React.FC<Props> = ({
    setStep,
    setError
}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();
    const [password, setPassword] = React.useState<string>();
    const [confirm_password, setConfirm_password] = React.useState<string>();
    const [loading, setLoading] = React.useState<boolean>(false);

    const user: IUser = useSelector(
        (state: AppState) => state.user,
        shallowEqual
    )
    const dispatch: Dispatch<any> = useDispatch()


    const onSubmit: SubmitHandler<Inputs> = async data => {
       setLoading(true)
       setError(null)
       try{
            const options = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await axios.post(baseUrl+"/register",{
                ...user,
                password:data.password
            },options)
            .then(async(response) => {
                setStep(3)
            }).catch(error => {
                setError(error.response.data.message)
            });
            setLoading(false)
        }catch(e){
            console.log(e)
        }   
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
        }}>Set Password</h5>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
              <label>Password</label>
              <input type="password"  defaultValue={password} {...register("password", { required: true, minLength: 8,  onChange: (e) => setPassword(e.target.value) })} className="form-control"  placeholder="Enter your password"/>
              {errors.password?.type === "required" && <span style={{color:"red"}}>This field is required</span>}
              {errors.password?.type === "minLength" && <span style={{color:"red"}}>Password should have at-least 8 characters.</span>}
          </div>
          <div className="form-group">
              <label>Confirm password</label>
              <input type="password" defaultValue={confirm_password} {...register("confirm_password", { required: true,  validate: value => value === password,  onChange: (e) => setConfirm_password(e.target.value) })} className="form-control" placeholder="Confirm password"/>
              {errors.confirm_password?.type === "required" && <span style={{color:"red"}}>This field is required</span>}
              {errors.confirm_password?.type === "validate" && <span style={{color:"red"}}>Password miss match</span>}
          </div>

          <input type="submit" value={loading?"Loading...":"Done"} style={{
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

    
          <div style={{
               marginTop:"40px",
          }}>
              <a href="#" style={{
                  color:"#205081"
              }} onClick={()=>setStep(1)}>Back</a>
          </div>
      </form>
    </div>
  )

}

export default Password