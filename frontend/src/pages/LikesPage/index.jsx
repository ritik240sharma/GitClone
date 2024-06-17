import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useAuthContext } from "../../Context/AuthContext";
import Timestamp from "../../lib/timestamp";
import { MdDelete } from "react-icons/md";
import {toast} from 'react-hot-toast'

function index() {
  const[users,Setusers]=useState(null)
  const{authUser}=useAuthContext()
 
   async function call(username)
  {
     try
     {
        var response=await fetch(`/api/user/delete/${username}`);
        response=await response.json();
        if(!response.error)
           toast.success(response.message);
        else 
           toast.error(response.error);
     }
     catch(error)
     {
        console.log(error.message)
        return toast.error(error.message)
     }
     finally
     {
       Setusers(users.filter(x=>x.name!==username))
     }
      
  }

  useEffect(()=>{
    async function getLikedUsers()
    {
       const response=await fetch(`/api/user/getlike/${authUser.username}`)
       const data=await response.json();
       Setusers(data)
      }
      getLikedUsers();
    },[])
  return (
    <div className="flex justify-center w-full h-full p-3">
      <div className="relative overflow-x-auto shadow-md rounded-lg px-4   ">
        <table className="w-full text-sm text-left  bg-glass overflow-hidden ">
          <thead className="text-xs uppercase bg-glass border-b-2">
            <tr >
              <th  className="p-4">
                <div className="flex items-center">No</div>
              </th>
              <th  className="px-6 py-3">
                Username
              </th>
              <th className="px-6 py-3">
                Date
              </th>
              <th className="px-6 py-3">
                Action
              </th>
              <th className="px-6 py-3">
                   delete
              </th>
            </tr>
          </thead>
          <tbody>

          {
            users?.map((x,index)=>{
                     return<tr key={x.name} 
                      className="bg-glass border-b">
                       <td className="w-4 p-4">
                         <div className="flex items-center">
                           <span>{index+1}</span>
                         </div>
                       </td>
                       <td
                         scope="row"
                         className="flex items-center px-6 py-4 whitespace-nowrap "
                       >
                         <a href={x.url} target="_blank"><img
                           className="w-10 h-10 rounded-full"
                           src={x.avatar_url
                           }
                           alt="Jese image"
                         />
                         </a>

                         <a className="ps-3" href={x.url} target="_blank" >
                           <div className="text-base font-semibold" >{x.name}</div>
                         </a>

                       </td>

                       <td className="px-6 py-4">{Timestamp(x.created_at)}</td>

                       <td className="px-6 py-4">
                         <div className="flex items-center">
                           <FaHeart size={22} className="text-red-500 mx-2" />
                           Liked your profile
                          </div>
                       </td>

                       <td className="px-6 py-4 ">
                         <div className="flex items-center">
                           <MdDelete size={26}  className="text-red-500  mx-2 active:text-black" onClick={()=>call(x.name)}/>
                          </div>
                       </td>

                       
                       
                  </tr>

            })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default index;


