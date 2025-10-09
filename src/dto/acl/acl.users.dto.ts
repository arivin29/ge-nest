import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclUsersDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idUsers: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  username?: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserGroup?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tipe?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  foto?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  activated?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt?: string;
}
