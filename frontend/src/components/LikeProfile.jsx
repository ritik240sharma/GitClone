import { FaHeart } from "react-icons/fa";
import getUser from "../Zustand/getUser";
import {toast} from "react-hot-toast"
import { useAuthContext } from "../Context/AuthContext";
const LikeProfile = () => {
	const {userProfile}=getUser()
  const{authUser}=useAuthContext();
	const handleLikeProfile = async () => {
		 try
     {
       const res=await fetch(`/api/user/liked/${authUser.username}`,
        {
          method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userProfile),
            credentials: "include",
        }
       )
       const data=await res.json();
       if(!data.error)
       toast.success(data.message)
      else toast.error(data.error)
     }
     catch(error)
     {
        toast.error(error.message)
     }
	};

	
	return (
		<button
			className='p-2 text-xs w-full font-medium rounded-md bg-glass border border-blue-400 flex items-center gap-2'
			onClick={handleLikeProfile}
		>
			<FaHeart size={16} /> Like Profile
		</button>
	);
};
export default LikeProfile;