import { MdLogout } from "react-icons/md";
import {toast} from 'react-hot-toast'
import { useAuthContext } from "../../Context/AuthContext";
function index() {
	const{authUser,SetauthUser}=useAuthContext();
	async function Logout()
	{
		try
		{
          const res=await fetch("/api/auth/logout",{credentials:"include"})
		  const data=await res.json()
          SetauthUser(null)
		}
		catch(error)
		{
           toast.error(error.message)
		}
	}
	return (
		<>
			<img
				src={authUser?.avatarurl}
				className='w-10 h-10 rounded-full border border-gray-800'
			    alt=""
			/>

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800' onClick={()=>{Logout()}}>
				<MdLogout size={22} />
				 
			</div>
		</>
	);
};

export default index
