// src/modules/auth/dto/current-user-response.dto.ts
import { ApiProperty } from '@nestjs/swagger'; 
import { AclUsers } from 'src/entities/acl';

export class CurrentUserResponseDto {
    @ApiProperty({ type: () => AclUsers })
    user: AclUsers;

    @ApiProperty({ example: { idRole: 'admin', namaRole: 'Administrator' } })
    role: any;

    @ApiProperty({ example: { idPegawai: 'P001', nama: 'Budi' } })
    pegawai: any;
}
