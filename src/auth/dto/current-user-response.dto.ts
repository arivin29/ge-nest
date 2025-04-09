// src/modules/auth/dto/current-user-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/modules/users/entities/users.entity';

export class CurrentUserResponseDto {
    @ApiProperty({ type: () => Users })
    user: Users;

    @ApiProperty({ example: { idRole: 'admin', namaRole: 'Administrator' } })
    role: any;

    @ApiProperty({ example: { idPegawai: 'P001', nama: 'Budi' } })
    pegawai: any;
}
