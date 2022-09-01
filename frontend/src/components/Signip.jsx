import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link,useNavigate} from 'react-router-dom'
import { signupAction } from '../actions/user-action'
import swal from 'sweetalert'
import axios from 'axios'

export default function Signip({history}) {
  const [firstName,setfirstName]=useState("")
  const [lastName,setlastName]=useState("")
  const [email,setemail]=useState("")
  const [type,settype]=useState(false)
  const [phoneNo,setphoneNo]=useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword,setconfirmPassword]=useState("")
  const dispatch = useDispatch()
  const navigate=useNavigate()
  
  let x = true;
  let y = true;
  const handleLogin =async(e) => {
      e.preventDefault()          
      if(password!=confirmPassword){
        alert("Passwords did not match");  
      }
      else {  
        alert(" register successfully");  
        const result=await axios.post("http://localhost:5000/api/v1/signup/user",{
          firstName,
          lastName,
          email,
          isAdmin:type,
          phoneNo,
          password,
          conPassword:confirmPassword
  
        })
        console.log(result)
        // dispatch(signupAction(fd))
        e.target.reset()
        swal({
            title:"Register Successfully...🥰🥰🥰",
            icon: "success"     
        })
        navigate("/")
      }  
      console.log("hello")
       

  }
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-sm-6 offset-sm-3 alert alert-info rounded-3">
            <div className="card rounded-3">
                <div className="card-header">
                    <h5>Sign-Up</h5>
                </div>
                <div className="card-body bg-dark">
                    <form action="" onSubmit={handleLogin}>
                    <label htmlFor="" className="text-white">First Name</label><br />
                    <input type="text" className="form-control" placeholder="Please Enter First Name" required   onChange={e=>{
                        setfirstName(e.target.value)
                    }}/>
                    <label htmlFor="" className="text-white">Last Name</label><br />
                    <input type="text" className="form-control" placeholder="Please Enter Last Name" required   onChange={e=>{
                        setlastName(e.target.value)
                    }}/>
                    <label htmlFor="" className="text-white">Email</label><br />
                    <input type="email" className="form-control" placeholder="Please Enter Email" required   onChange={e=>{
                        setemail(e.target.value)
                    }}/>
                    <label htmlFor="" className="text-white">Type</label><br />
                    <select name="" id="" className='form-control' onChange={e=>{
                      settype(e.target.value)
                    }}>
                      <option value="false">User</option>
                      <option value="true">Admin</option>
                    </select>
                    {/* <input type="text" className="form-control" placeholder="Please Enter Name" required name="" id="" onChange={e=>{
                        settype(e.target.value)
                    }}/> */}
                    <label htmlFor="" className="text-white">Phone No</label><br />
                    <input type="number" className="form-control" placeholder="Please Enter Phone Number" required name="" id="" onChange={e=>{
                        setphoneNo(e.target.value)
                    }}/>

                    <label htmlFor="" className="text-white">Password</label><br />
                        <div className="input-group">
                        <input type="password"   className="form-control" placeholder="Please Enter Password" required name="" id="password" onChange={e=>{
                          setpassword(e.target.value)
                        }} />
                            <span className="input-group-text"><i id="btn" className="bi bi-eye-fill"  onClick={(e) => {
                              
                              if (x) {
                                document.getElementById("password").setAttribute("type", "text")
                                document.getElementById("btn").classList.add("bi-eye-slash-fill")
                                document.getElementById("btn").classList.remove("bi-eye-fill")
                                x = false;
                              }else {
                                document.getElementById("password").setAttribute("type","password")
                                document.getElementById("btn").classList.add("bi-eye-fill") 
                                document.getElementById("btn").classList.remove("bi-eye-slash-fill")
                                x = true;
                              }
                            }}></i></span>
                        </div>  
                            <label htmlFor="" className="text-white">Confirm Password</label><br />
                            <div className="input-group"> 
                            <input type="password" id="conpass" className="form-control"   required name=""   onChange={e=>{
                                setconfirmPassword(e.target.value)
                            }}/>
                            <span className="input-group-text"><i id="btn" className="bi bi-eye-fill"  onClick={(e) => {
                              
                              if (y) {
                                document.getElementById("conpass").setAttribute("type", "text")
                                document.getElementById("btn").classList.add("bi-eye-slash-fill")
                                document.getElementById("btn").classList.remove("bi-eye-fill")
                                y= false;
                              }else {
                                document.getElementById("conpass").setAttribute("type","password")
                                document.getElementById("btn").classList.add("bi-eye-fill") 
                                document.getElementById("btn").classList.remove("bi-eye-slash-fill")
                                y = true;
                              }
                            }}></i></span>
                            </div><br />
                        <button className="btn btn-info btn-sm w-100 text-white">Create an Account</button>
                        <div className="text-center mt-2">
                        <Link to="/" className="text-white">or,Login</Link>
                        </div>
                   </form>
                </div>
            </div>
       </div>
        </div>
       </div>
  )
}
