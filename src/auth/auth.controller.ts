import { Controller, Post, Body, Req, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthResponseDto } from './dto/auth-response.dto';
import { SimpleMessageDto } from './dto/reset-response.dto';
import { TokenOnlyResponseDto } from './dto/token-only-response.dto';  
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { AclUsers } from 'src/entities/acl';

@ApiTags('Auth Public')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        @InjectRepository(AclUsers,'acl')
        private userRepo: Repository<AclUsers>,

        // @InjectRepository(Role)
        // private roleRepo: Repository<Role>,

        // @InjectRepository(Pegawai)
        // private pegawaiRepo: Repository<Pegawai>,
    ) { }

     
    
    @Post('login')
    @ApiOperation({ summary: 'Login user' })
    @ApiResponse({ status: 200, type: AuthResponseDto, description: 'Login berhasil' })
    @ApiResponse({ status: 403, description: 'User belum aktiv / wajib ganti password' })
    login(@Body() dto: LoginDto, @Req() req: Request) {
        return this.authService.login(dto, req);
    }

    @Post('refresh-token')
    @ApiOperation({ summary: 'Refresh token' })
    @ApiResponse({ status: 200, type: TokenOnlyResponseDto })
    refresh(@Body() dto: RefreshTokenDto) {
        return this.authService.refreshToken(dto);
    }

    @Post('forgot-password')
    @ApiOperation({ summary: 'Lupa password' })
    @ApiResponse({ status: 200, type: SimpleMessageDto })
    forgotPassword(@Body('email') email: string) {
        return this.authService.forgotPassword(email);
    }

    @Post('reset-password')
    @ApiOperation({ summary: 'Reset password' })
    @ApiResponse({ status: 200, type: SimpleMessageDto })
    resetPassword(@Body() dto: ResetPasswordDto) {
        return this.authService.resetPassword(dto);
    }

    @Post('logout')
    @ApiOperation({ summary: 'Logout user' })
    @ApiResponse({ status: 200, type: SimpleMessageDto })
    logout(@Body('refreshToken') refreshToken: string) {
        return this.authService.logout(refreshToken);
    }
}
