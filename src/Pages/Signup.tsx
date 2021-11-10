import * as React from "react"
import { useMediaQuery } from 'react-responsive'
import {
    Link
} from "react-router-dom";
import UserDetails from "../components/UserDetails";
import Password from "../components/Password";
import Completed from "../components/Completed";

// image 
import logo from "../assets/logo.png"

const Signup: React.FC = () => {
  const smallScreen = useMediaQuery({ query: '(max-width: 700px)' })
  const [step, setStep] = React.useState(1);
  const [error, setError] = React.useState(null);



  const steps = React.useCallback(() => {
    switch (step) {
        case 1:
            return <UserDetails setStep={setStep} />
        case 2:
            return <Password setStep={setStep} setError={setError} />
        case 3:
            return <Completed setStep={setStep} />
        }
},[step])



  return (
    <main>
      <div 
      style={{
          display:"flex",
          flexDirection:"column",
          justifyItems:"center",
          alignItems:"center",
          backgroundColor:"#205081",
          height:"400px",
          paddingTop:"40px",
      }}>
          <img src={logo} width="150px" />
          <div style={{
              position:"absolute",
              backgroundColor:"white",
              width:smallScreen?"80%":"40%",
            //   height:"400px",
              boxShadow:"0 0 20px rgba(0,0,0,0.3)",
              marginTop:"100px",
              paddingBottom:'40px',
              borderRadius:20
          }}>
              {
                steps()
              }
              {
                  error?(
                    <div style={{
                        marginTop:"20px"
                    }}>
                        <h6 style={{
                            color:'red',
                            textAlign:"center"
                        }}>{error}</h6>
                    </div>
                  ):null
              }
          </div>
      </div>
     
    </main>
  )

}

export default Signup