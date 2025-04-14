// src/modules/auth/auth-protected.controller.ts
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from './user.decorator'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrentUserResponseDto } from './dto/current-user-response.dto';
import { SimpleMessageDto } from './dto/reset-response.dto';
import { AclUsers } from 'src/entities/acl';

@ApiTags('Auth Protect')
@Controller('auth-protect')
export class AuthProtectedController {
    constructor(
        private readonly authService: AuthService,
        @InjectRepository(AclUsers,'acl')
        private userRepo: Repository<AclUsers>,
    ) { }



    @Get('me')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Get current user' })
    @ApiResponse({ status: 200, type: CurrentUserResponseDto })
    async getMe(@User() userJwt: any) {
        let user = await this.userRepo.findOneBy({ idUsers: userJwt.sub });

        // const role = await this.roleRepo.findOneBy({ idRole: user.idRole }); // sesuaikan kolom
        // const pegawai = await this.pegawaiRepo.findOneBy({ idPegawai: user.idPegawai }); // jika ada
        
        if (user) {
            delete (user as any).password;
            delete (user as any).wajibResetPassword;
        }
        return {
            user: user,
            // role,
            // pegawai,
        };
    }

    @Post('logout')
    @ApiOperation({ summary: 'Logout user' })
    @ApiResponse({ status: 200, type: SimpleMessageDto })
    logout(@Body('refreshToken') refreshToken: string) {
        return this.authService.logout(refreshToken);
    }
}
