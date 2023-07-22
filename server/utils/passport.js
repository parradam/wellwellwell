import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import fs from 'fs';
import path from 'path';
import User from '../models/user.js';

const pathToKey = path.join(__dirname, '..', 'public.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf-8');

// At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};

// app.js passes the global passport object here; this function configures it
// this will run on every route using passport.authenticate() middleware
export default (passport) => {
  // JWT payload passed to verify callback
  passport.use(
    new JwtStrategy(options, (jwtPayload, done) => {
      // JWT is valid

      // assign 'sub' property on JWT to database ID of user
      User.findOne({ _id: jwtPayload.sub }, (err, user) => {
        if (err) return done(err, false);

        // If user is valid, return it
        if (user) return done(null, user);
        return done(null, false);
      });
    }),
  );
};
