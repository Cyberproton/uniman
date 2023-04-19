import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import { errorHandler } from './errors';
import router from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  return console.log(`Server running at http://localhost:${port}`);
});
