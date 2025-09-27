import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptUsersDto {
  @ApiProperty({ required: true })
  activated: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  akses: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  foto: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  id: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinPosisi: number;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  rememberToken: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tipe: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  username: string;
}
