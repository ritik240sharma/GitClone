import dotenv from 'dotenv'
dotenv.config();

async function usercontroller(req, res) {
  const {username} = req.params;
  try 
  {
    var response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: process.env.GIT_HUB_KEY,
      },
    });

    var userProfile=await response.json()
	const response2 = await fetch(userProfile.repos_url, {
        headers: {
            authorization: process.env.GIT_HUB_KEY,
        },
    });
	var repos=await response2.json();
	res.status(200).json({userProfile,repos})		
  } 
  catch (error) 
  {
      res.status(500).json({error:error.message})
  }
   
}


async function exploreController(req, res){
	const { language } = req.params;
	try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
			{
        headers: {
          authorization: process.env.GIT_HUB_KEY,
				},
			}
		);
		const data = await response.json();
    console.log(data)
		res.status(200).json({ repos: data.items });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};


export { usercontroller ,exploreController};
