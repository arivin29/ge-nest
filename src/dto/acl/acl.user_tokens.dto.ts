import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclUserTokensDto {
  @ApiProperty({ required: true })
  id: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  refreshToken: string;

  @ApiProperty({ required: false })
  userAgent: string;

  @ApiProperty({ required: false })
  ipAddress: string;

  @ApiProperty({ required: false })
  createdAt: string;
}
