import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'
import { loginAction } from '../actions/user-action';

export default function Login() {
    const [email,setemail] = useState("")
    const [password, setpassword] = useState("")
    // const dispatch = useDispatch()
    let x = true;
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const { userloginRedux }  = useSelector(state => state.userLogin);
    const userError   = useSelector(state => state.userLogin);

    const handleUserLogin = (e)=>{
        e.preventDefault()
        dispatch(loginAction({email, password}))
    }
    useEffect(() => {
        
        if(userloginRedux){
            if(userloginRedux.info.isAdmin==true){
                navigate("/admin")
            }
            else{
                navigate("/indexpage")
            }
            
        }
        // userloginRedux && navigate("/indexpage");
        
    }, [userloginRedux])
  return (
    <div> 
        <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3 alert alert-danger mt-5">
                <div className="card">
                    <div className="card-header">
                        <h5 className="text-info">Login</h5>
                    </div>
                    <div className="card-body">
                            <form action="" onSubmit={handleUserLogin}>
                                {
                                    userError.userloginReduxError &&
                                     <div className="alert alert-dark  mt-3">
                                        <h5 className="text-danger text-center"><b className="text-warning h4">⚠ </b> {userError.userloginReduxError}</h5>
                                </div>   
                               }
                            <label htmlFor="" >Email</label><br />
                            <input type="email" name="" id="" placeholder="Enter Email" className="form-control mb-2" required onChange={e=>{
                                setemail(e.target.value)
                                }} />
                                {}
                            <label htmlFor="" >Password</label><br />
                             <div className="input-group">
                          <input type="password" className="form-control" required name=""  placeholder="Enter Password" id="password" onChange={e=>{
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
                        </div> <br />
                            <button className="btn btn-info btn-sm px-4 w-100 text-white">Login</button>
                            <br />
                            <div className=" text-center mt-2">
                            <Link className="text-black " to="/signUp">Create Account</Link>
                           </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
