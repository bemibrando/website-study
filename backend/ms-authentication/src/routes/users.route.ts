import { NextFunction, Request, Response, Router } from 'express';	// import express Router
import { StatusCodes } from 'http-status-codes';	// import http status codes
import userRepository from '../repository/user.repository';
import DatabaseError from '../errors/database.error.model';

const usersRoute = Router();	// create express Router

// get all users
usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.getAll(); // create users array
    res.status(StatusCodes.OK).send(users);	// send response
});

// get user by id
usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid; // get uuid
        const user = await userRepository.getById(uuid); // get user
        res.status(StatusCodes.OK).send({ user });	// send response
    } catch (error) {
        next(error); // pass error to next middleware
    }
});

// post new user
usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body; // get new user
    const uuid = await userRepository.create(newUser); // create user
    res.status(StatusCodes.CREATED).send(uuid);	// send response
});

// update user by id
usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid; // get uuid
    const updatedUser = req.body; // get updated user

    updatedUser.uuid = uuid; // set uuid

    await userRepository.update(updatedUser); // update user

    res.status(StatusCodes.OK).send({ updatedUser });	// send response
});

// delete user by id
usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid; // get uuid
    await userRepository.remove(uuid); // delete user
    res.status(StatusCodes.OK).send({ uuid });	// send response
});

export default usersRoute;	// export express Router