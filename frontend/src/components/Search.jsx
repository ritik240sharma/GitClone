import { useState } from "react";
import { IoSearch } from "react-icons/io5";

function Search({getUserprofileandrepo}) {
	const[username,Setusername]=useState("");
	async function HandleChange(e)
	{
        e.preventDefault();
        const res=await getUserprofileandrepo(username)
		Setusername("");
	}
    return (
		<form className=' max-w-xl mx-auto p-2  bg-gray-200 rounded-lg ' onSubmit={(e)=>HandleChange(e,username)}>
			<div className='relative '>
				<div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 '>
					<IoSearch className='w-5 h-5' />
				</div>
				<input
					type='search'
					id='default-search'
					className=' w-full p-4 ps-10 text-sm rounded-lg bg-glass bg-gray-200  focus:outline-none visible'
					placeholder='i.e. johndoe'
					value={username}
					required
					onChange={(e)=>Setusername(e.target.value)}
                    
				/>
				<button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-300 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-100'
				>
					Search
				</button>
			</div>
		</form>
	);
}

export default Search

