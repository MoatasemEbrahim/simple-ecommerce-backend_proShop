import type {Request,Response,NextFunction} from 'express'

// this is a middleware of non-error handlers according to express
// but it handle not found error as fallback after searching in all apis
export const notFound = (req:Request,res:Response,next:NextFunction):void => {
    const error = new Error (`Not found - ${req.originalUrl}`);
    res.status(404)
    next(error)
}

export const errorHandler = (error:Error,req:Request,res:Response,next:NextFunction):void=>{    
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV !== 'production' ? error.stack : null
    })
}

