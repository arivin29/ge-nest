import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclUserTokensDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  id: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idUser: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ipAddress: string;

  @ApiProperty({ required: false })
  @IsOptional()
  refreshToken: string;

  @ApiProperty({ required: false })
  @IsOptional()
  userAgent: string;
}
