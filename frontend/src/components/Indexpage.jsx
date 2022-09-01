import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Indexpage() {
    const { userloginRedux } = useSelector(state => state.userLogin)
    const navigate=useNavigate()
    useEffect(() => {
        if (!userloginRedux) {
              navigate("/")
          }  
    },[])
  return (
    <div> 
        <div className='container'>
          <br />
           <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card" >
            <div className="card-header">
              Profile
            </div> 
              <div className="card-body">
              <div className="card-header">
              <div className="list-group">
                  <div className="list-group-item">
                  First Name : <span>{userloginRedux?.info.firstName}</span>
                  </div>
                  <div className="list-group-item">
                    Last Name : <span>{userloginRedux?.info.lastName}</span>
                  </div> 
                  <div className="list-group-item">
                    Email : <span>{userloginRedux?.info.email}</span>
                  </div> 
                  <div className="list-group-item">
                    Phone No : <span>{userloginRedux?.info.phoneNo}</span>
                  </div> 
                  <div className="list-group-item">
                    Password : <span>{userloginRedux?.info.password}</span>
                  </div> 
                </div>
               </div>
              </div>
           </div>
        </div>
       </div>
    </div>
    </div>
  )
}
