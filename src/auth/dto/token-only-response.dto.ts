import { ApiProperty } from '@nestjs/swagger';

export class TokenOnlyResponseDto {
    @ApiProperty()
    access_token: string;

    @ApiProperty()
    refresh_token: string;
}
