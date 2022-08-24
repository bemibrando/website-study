import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import statusRoute from './routes/status.rout';
import usersRoute from './routes/users.route';

const app = express(); // create express app

// App Config
app.use(express.json()); // use json parser
app.use(express.urlencoded({ extended: true })); // use urlencoded parser

// Routes Config
app.use(statusRoute); // use statusRoute
app.use(usersRoute); // use usersRoute

// error handler config
app.use(errorHandler); // use errorHandler

// Initialize Server
app.listen(3000, () => {
    console.log('Listening on port 3000!');
});