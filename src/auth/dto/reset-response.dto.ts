import { ApiProperty } from '@nestjs/swagger';

export class SimpleMessageDto {
    @ApiProperty()
    message: string;
}
