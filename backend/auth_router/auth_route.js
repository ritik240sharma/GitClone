import { Router } from "express";
import dotenv from 'dotenv'
import passport from "passport";

const auth_route=Router();
dotenv.config()

auth_route.get('/github',passport.authenticate('github', { scope: [ 'user:email' ] }),);

auth_route.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL+'/login' }),
  function(req, res) {
    res.redirect(process.env.CLIENT_BASE_URL);
  });

  auth_route.get("/check", (req, res) => {
    if (req.isAuthenticated()) {
      res.send({ user: req.user.rows[0] });
    } else {
      res.send({ user: null });
    }
  });
  
  auth_route.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      res.json({ message: "Logged out" });
    });
  });

export {auth_route}

