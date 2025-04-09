// src/common/middleware/auth.middleware.ts
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly jwtService: JwtService) { }

    use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
        console.log(token)
        if (!token) {
            return res.status(401).json({ code: 401, pesan: 'Token tidak ditemukan' });
        }

        try {
            const payload = this.jwtService.verify(token); // akan lempar error jika expired
            // inject ke req.user jika dibutuhkan
            (req as any).user = payload;
            next();
        } catch (err) {
            return res.status(401).json({ code: 401, pesan: 'Token tidak valid atau expired' });
        }
    }
}
