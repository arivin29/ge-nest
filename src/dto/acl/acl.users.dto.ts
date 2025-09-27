import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclUsersDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserGroup: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idUsers: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  lastLogin: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: string;

  @ApiProperty({ required: false })
  @IsOptional()
  wajibResetPassword: boolean;
}
