import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminUserDataAction } from '../actions/user-action'

export default function Admin() {
    const { adminData } = useSelector(state => state.allUsers)
    const [data,setdata]=useState([])
     
    const [id,setid]=useState()
    const dispatch=useDispatch()
    const getData=async()=>{
      const {data}=await axios.get("http://localhost:5000/api/v1/admin")
      console.log(data)
      setdata(data.data)
    }
    useEffect(()=>{
        // dispatch(adminUserDataAction())
        getData()

    },[])
    const handleDeleteUser=async()=>{
      console.log(id)
       const result= await axios.delete(`http://localhost:5000/api/v1/admin/deleteuser/${id}`)
       console.log(result)
        getData()
    }
  return (
    <div> 
        <div className="container-fluid alert alert-danger  mt-5">
        <div className="col col-sm-8 offset-2 mt-5">
           <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="bg-warning">
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No</th>                     
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead >
                <tbody className="bg-dark text-light font-weight-bold w-100">
                  {data &&
                    data?.length > 0 &&
                    data?.map((item, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td className="text-capitalize">{item.firstName}</td>
                        <td className="text-capitalize">{item.lastName}</td>
                        <td className="text-capitalize">{item.email}</td>
                        <td className="text-capitalize">{item.phoneNo}</td>                       
                         
                        <td>
                          {item.isAdmin ? (
                            <>Admin</>
                          ) : (
                             <>User</>
                          )}
                        </td>
                        <td className='text-capatalize'>
                          <button className="btn btn-danger" data-bs-target="#update" data-bs-toggle="modal" onClick={(e)=>{setid(item._id)}}>Delete User</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
           </div>

          <div class="modal fade" id="update">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header bg-warning">Delete  User ?</div>
                <div class="modal-body bg-dark">
                  <button
                    className="btn btn-success px-4"
                    data-bs-dismiss="modal"
                    onClick={handleDeleteUser}
                  >
                    {" "}
                    Yes{" "}
                  </button>
                  <button
                    className="btn btn-outline-danger ms-2 px-4"
                    data-bs-dismiss="modal"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    </div>
  )
}
