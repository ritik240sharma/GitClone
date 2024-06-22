import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'passport';
import  session  from 'express-session';
import { userroute } from './auth_router/userroute.js';
import { usercontroller } from './auth_controller/usercontroller.js';
import { auth_route } from './auth_router/auth_route.js';
import { connection } from './db/db.js';
import path from  'path'
import "./passport/github_auth.js"
dotenv.config()

const option={
    origin: process.env.CLIENT_BASE_URL,
    method:["POST,GET,PUSH,HEAD,PATCH"],
    credentials: true,
}
const app=express();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false ,
    cookie:{
        maxAge:1000*60*60*24*15
    }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors(option));
app.use(express.json());
app.use("/api/user",userroute)
app.use("/api/explore",userroute)
app.use("/api/auth",auth_route)

const port=process.env.PORT||4000;
const _dirname=path.resolve();
app.use(express.static(path.join(_dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(_dirname,"frontend","dist","index.html"))
})
app.listen(port,()=>{
    connection();
    console.log(`server started at http://localhost:${port}`)
})