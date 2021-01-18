declare namespace Express {
    export interface Request {
       user?: Record<string, any> | null
       token?: string
    }
 }