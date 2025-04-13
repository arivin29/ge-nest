import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclUsersDto {
  @ApiProperty({ required: true })
  idUsers: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: false })
  nama: string;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  wajibResetPassword: boolean;

  @ApiProperty({ required: false })
  lastLogin: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  idUserGroup: string;
}
