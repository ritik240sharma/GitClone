import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import OpenWindow from "../../lib/function";

const index = () => {
	return (
		<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
			<div className='w-full  bg-glass rounded-lg shadow-lg border border-gray-200 md:mt-0 sm:max-w-md xl:p-0'>
				<div className='p-6 flex flex-col gap-4 md:gap-1  md:space-y-6 sm:p-8'>
					<h1 className='text-xl font-bold  md:text-2xl text-center'>Login to your account</h1>
					<button
						type='button'
						className='text-white bg-gray-800 hover:bg-gray-800/90 
                        font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center'
			            onClick={()=>OpenWindow()}
					>
						<FaGithub className='w-5 h-5' />
						Login with Github
					</button>
					<p className='text-sm font-light text-gray-500'>
						{"Don't"} have an account?{" "}
						<Link to='/signup' className='font-medium text-primary-600 hover:underline text-blue-600'>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default index