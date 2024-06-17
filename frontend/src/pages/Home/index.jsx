import { useCallback, useEffect } from "react";
import getUser from "../../Zustand/getUser";
import ProfileInfo from "../../components/ProfileInfo";
import Repos from "../../components/Repos";
import Search from "../../components/Search";
import SortRepos from "../../components/SortRepos";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";
    
function Home(){
	const{repos,loading,Setloading,Setrepos,SetuserProfile}=getUser()
    async function getUserprofileandrepo(username="ritik240sharma"){
		Setloading(true);
		  try
		  {	
			var response=await fetch(`/api/user/profile/${username}`)		
			response=await response.json();
			if(!response.error)
		   {
			Setrepos(response.repos);
			SetuserProfile(response.userProfile);
		   }
		   else
		   {
              toast.error("no user found")
		   }
		}
		catch(error)
		{
			console.log(error.message)
			toast.error("user does not exists")
		}
		finally
		{
			Setloading(false)
		}
		
	}

	
	useEffect(()=>{
		getUserprofileandrepo()
	},[])
	
	return (
		<div className='m-4'>
			<Search getUserprofileandrepo={getUserprofileandrepo}/>
			{repos?.length>1? <SortRepos />:null}
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				<ProfileInfo />
				<Repos />
				{loading?<Spinner />:null}
			</div>
		</div>
	);
};

export default Home