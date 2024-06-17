import getUser from "../Zustand/getUser";
import Repo from "./Repo";
import Spinner from "./Spinner";

const Repos = ({alwaysFullWidth=false}) => {
	const{repos,loading }=getUser()
	const className = alwaysFullWidth ? "w-full" : "lg:w-2/3 w-full";
	if(loading)return <Spinner/>
	return (
		<div className={`${className} bg-glass hover:bg-red-50 hover:z-20 shadow-xl border border-gray-100 rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200 z-50'>
				
				{
					repos.length===0?(<>NO REPOSITORY AVAILABLE</>):
					repos.map(x=>{
					return<Repo key={x.id} repo={x}/>
				})}
			</ol>
		</div>
	);
};

export default Repos