import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../errors/database.error.model";

function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if(error instanceof DatabaseError) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).send(error);	// send response
    }else{
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);	// send response
    }
}

export default errorHandler;