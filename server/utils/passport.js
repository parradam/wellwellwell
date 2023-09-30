import { Strategy as JwtStrategy } from 'passport-jwt';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import User from '../models/user.js';

const filename = fileURLToPath(import.meta.url);
const dir = dirname(filename);

const pathToKey = join(dir, '..', 'public.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf-8');

// At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
const options = {
  jwtFromRequest: (req) => {
    const authCookie = req.cookies.auth?.token;
    if (authCookie && authCookie.startsWith('Bearer ')) {
      const jwtWithoutBearer = authCookie.slice('Bearer '.length);
      return jwtWithoutBearer;
    }
    return null;
  },
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};

// app.js passes the global passport object here; this function configures it
// this will run on every route using passport.authenticate() middleware
export default (passport) => {
  // JWT payload passed to verify callback
  passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
      // JWT is valid

      try {
        // assign 'sub' property on JWT to database ID of user
        const user = await User.findOne({ _id: jwtPayload.sub });

        if (!user) return done(null, false);

        // If user is valid, return it
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }),
  );
};
