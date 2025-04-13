import { ApiProperty } from '@nestjs/swagger';  
import { AclUsers } from 'src/entities/acl';

export class AuthResponseDto {
    @ApiProperty()
    access_token: string;

    @ApiProperty()
    refresh_token: string;

    @ApiProperty({ type: () => AclUsers })
    user: Partial<AclUsers>; // agar tidak expose password/hash
}
