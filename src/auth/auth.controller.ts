import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiOperation({ summary: 'Login user' })
    @ApiResponse({ status: 200, description: 'Login berhasil' })
    login(@Body() dto: LoginDto, @Req() req: Request) {
        return this.authService.login(dto, req);
    }

    @Post('refresh-token')
    @ApiOperation({ summary: 'Refresh access token' })
    @ApiResponse({ status: 200, description: 'Token berhasil diperbarui' })
    refresh(@Body() dto: RefreshTokenDto) {
        return this.authService.refreshToken(dto);
    }

    @Post('forgot-password')
    @ApiOperation({ summary: 'Kirim email reset password' })
    @ApiResponse({ status: 200, description: 'Token reset dikirim' })
    forgotPassword(@Body('email') email: string) {
        return this.authService.forgotPassword(email);
    }

    @Post('reset-password')
    @ApiOperation({ summary: 'Reset password user' })
    @ApiResponse({ status: 200, description: 'Password berhasil direset' })

    resetPassword(@Body() dto: ResetPasswordDto) {
        return this.authService.resetPassword(dto);
    }


    @Post('logout')
    @ApiOperation({ summary: 'Logout user' })
    @ApiResponse({ status: 200, description: 'Berhasil logout' })
    logout(@Body('refreshToken') refreshToken: string) {
        return this.authService.logout(refreshToken);
    }
}
