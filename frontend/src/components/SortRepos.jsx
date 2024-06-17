import { useState } from "react";
import getUser from "../Zustand/getUser";

function SortRepos() {
  const { repos, Setrepos } = getUser();
  const[selected,Setselected]=useState(null)
  function HandleChange(e) {
    const target=(e.target.value);
	
	
		if (target === "recent") {
			repos.sort((a, b) => new Date(b.created_at)-new Date(a.created_at)); 
		} else if (target === "stars") {
			repos.sort((a, b) => b.stargazers_count - a.stargazers_count); 
		} else {
			repos.sort((a, b) => b.forks_count - a.forks_count);
		}
		
        Setrepos(repos);
		console.log(repos)
	    Setselected(target)
  }
  const array = [
    { value: "recent", name: "Most Recent" },
    { value: "stars", name: "Most Stars" },
    { value: "forks", name: "Most Forks" },
  ];
  const add=selected?'border border-blue-800 border-4 ':""
  const design =
    "bg-gradient-to-r from-cyan-300 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-100 active:text-blue-300 py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-yellow-100";
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      {array.map((x) => {
        return (
          <button
            type="button"
            className={`${design} ${selected===x.value?add:null} `}
            value={x.value}
            onClick={(e) => HandleChange(e)}
          >
           {x.name}
          </button>
        );
      })}
    </div>
  );
}

export default SortRepos;
