import { NestMiddleware, BadRequestException} from "@nestjs/common";
import { NextFunction, Request, Response} from "express";

export class UserIdCheckMiddleware implements	NestMiddleware{

    use(req: Request, res: Response, next: NextFunction){

        if (isNaN(parseInt(req.params.id)) || parseInt(req.params.id) < 1){
            throw new BadRequestException('Invalid ID')
        }
        
        next();
    }
}
