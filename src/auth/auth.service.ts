import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ResetPasswordDto } from './dto/reset-password.dto'; 
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { AclUsers, AclUserTokens } from 'src/entities/acl';


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private config: ConfigService,
        @InjectRepository(AclUsers, 'acl')
        private userRepository: Repository<AclUsers>,
        @InjectRepository(AclUserTokens,'acl')
        private readonly userTokenRepo: Repository<AclUserTokens>,
    ) { }

    async login(dto: LoginDto, req: Request) {
        const user = await this.userRepository.findOneBy({ email: dto.email });
         
        if (!user) {
            throw new UnauthorizedException('Email atau password salah');
        }

        const secret = this.config.get('jwt.secret');
        const saltedPassword = dto.password + secret;

        const match = await bcrypt.compare(saltedPassword, user.password);
        if (!match) {
            throw new UnauthorizedException('Email atau password salah');
        }

        if (user.status === 'suspend' || user.status === 'non-aktif') {
            throw new ForbiddenException('Akun tidak aktif');
        }

        if (user.status === 'pending' || user.wajibResetPassword) {
            return {
                code: 'FORCE_PASSWORD_UPDATE',
                message: 'Silakan ubah password terlebih dahulu',
            };
        }

        const tokens = this.generateTokens(user);

        await this.userTokenRepo.save({
            id: uuidv4(),
            idUser: user.idUsers,
            refresh_token: tokens.refreshToken,
            user_agent: req.headers['user-agent'],
            ip_address: (req.headers['x-forwarded-for'] || req.socket.remoteAddress) as string,
        });

        // return format lebih clean
        return {
            access_token: tokens.accessToken,
            refresh_token: tokens.refreshToken,
            user: {
                idUsers: user.idUsers,
                email: user.email,
                name: null,
                role: null,
                status: user.status
            }
        };
    }


    private generateTokens(user: AclUsers) {
        const payload = { sub: user.idUsers, email: user.email };
        return {
            accessToken: this.jwtService.sign(payload),
            refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
        };
    }

    async refreshToken(dto: RefreshTokenDto) {
        const secret = this.config.get<string>('jwt.secret');

        // ✅ 1. Verify refresh token JWT
        let payload: any;
        try {
            payload = await this.jwtService.verifyAsync(dto.refreshToken, { secret });
        } catch (e) {
            throw new UnauthorizedException('Refresh token tidak valid');
        }

        // ✅ 2. Cari token di DB
        const tokenDb = await this.userTokenRepo.findOneBy({ refreshToken: dto.refreshToken });
        if (!tokenDb) {
            throw new UnauthorizedException('Token tidak ditemukan');
        }

        // ✅ 3. Cari user-nya
        const user = await this.userRepository.findOneBy({ idUsers: payload.sub });
        if (!user) {
            throw new UnauthorizedException('User tidak ditemukan');
        }

        // ✅ 4. Hapus refresh token lama
        await this.userTokenRepo.delete({ refreshToken: dto.refreshToken });

        // ✅ 5. Generate token baru
        const tokens = this.generateTokens(user);

        // ✅ 6. Simpan token baru
        await this.userTokenRepo.save({
            id: uuidv4(),
            id_user: user.idUsers,
            refresh_token: tokens.refreshToken,
            user_agent: 'refresh-rotation',
            ip_address: null,
        });

        // ✅ 7. Return access & refresh token baru
        return {
            access_token: tokens.accessToken,
            refresh_token: tokens.refreshToken,
        };
    }

    async forgotPassword(email: string) {
        // logic forgot password
        return { message: `Token reset terkirim ke ${email}` };
    }

    async resetPassword(dto: ResetPasswordDto) {
        // logic reset password
        return { message: 'Password berhasil direset' };
    }

    async logout(refreshToken: string) {
        // Misal kamu simpan refreshToken di table "user_tokens"
        await this.userTokenRepo.delete({ refreshToken });

        return { message: 'Berhasil logout' };
    }
}