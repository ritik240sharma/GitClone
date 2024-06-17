import {db} from "../db/db.js"

//for likeing user profile and storing in database
async function like_controller(req,res) {
   const{avatar_url,login,html_url}=req.body;
   const{username}=req.params;
   try{
       var user=await db.query("select * from likes where name=$1",[login]);
       user=user.rows.length;
       if(user!==0)return res.json({message:"user is already liked"})
        try
        {
           const response=await db.query("insert into likes (avatar_url,name,url,username) values($1,$2,$3,$4) ",[avatar_url,login,html_url,username]);
           res.status(200).json({message:"you have liked user profile"})
        }
        catch(error)
        {   
            res.json({error:error.message});
        }
     }
     catch(error)
     {
      console.log(error.message)
      res.send({error:error.message})
     }
}

//for deleting liked profile

async function Getlike(req,res)
{
       var username=req.params.username;
       try{
            var response=await db.query("select * from likes where username=$1",[username])
            var data=response.rows;
             res.status(200).json(data)
         }
      catch(error)
          {
             res.json({error:error.message})
          }
}



//delete like
async function Deletelike(req,res)
{
    const {username}=req.params;
    try{
      const response=await db.query("delete from likes where name=$1",[username])
      return res.json({message:"user removed from like page"})
    }
    catch(error)
    {

    }
}
export { like_controller,Getlike,Deletelike}