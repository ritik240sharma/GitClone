import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";
import { db } from "../db/db.js";
dotenv.config();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENTID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}/api/auth/github/callback`,
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await db.query("select * from users where username=$1",[profile.username])
      if (user.rows.length===0) {
        const newUser=await db.query("insert into users (name,username,profileUrl,avatarUrl,likedProfiles,likedBy) values($1,$2,$3,$4,$5,$6) returning * ",[ profile.displayName, profile.username, profile.profileUrl, profile.photos[0].value, [], [] ])
        done(null, newUser.rows[0]);
      } else {
        done(null, user);
      }
    }
  )
);
