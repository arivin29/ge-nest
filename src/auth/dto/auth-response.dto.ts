import { ApiProperty } from '@nestjs/swagger'; 
import { Users } from 'src/modules/users/entities/users.entity';

export class AuthResponseDto {
    @ApiProperty()
    access_token: string;

    @ApiProperty()
    refresh_token: string;

    @ApiProperty({ type: () => Users })
    user: Partial<Users>; // agar tidak expose password/hash
}
