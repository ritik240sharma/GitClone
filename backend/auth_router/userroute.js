import {Router} from 'express'
import { exploreController, usercontroller } from '../auth_controller/usercontroller.js';
import { Deletelike, Getlike, like_controller} from '../auth_controller/like_controller.js';
import { userAuthentication } from '../middleware/userAuthentication.js';
const userroute=Router();
userroute.get("/profile/:username",usercontroller);
userroute.get("/:language",exploreController);
userroute.post("/liked/:username",userAuthentication,like_controller)
userroute.get("/getlike/:username",userAuthentication,Getlike)
userroute.get("/delete/:username",userAuthentication,Deletelike)
export {userroute}