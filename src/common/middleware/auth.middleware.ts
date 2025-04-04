// src/common/middleware/auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers['authorization'];
        if (!token || token !== 'Bearer rahasia123') {
            return res.status(401).json({ code: 401, pesan: 'Unauthorized' });
        }
        next();
    }
}