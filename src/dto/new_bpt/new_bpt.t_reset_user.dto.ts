import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTResetUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  file: string;

  @ApiProperty({ required: true })
  idPerusahaan: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTResetUser: number; // PK

  @ApiProperty({ required: true })
  idUserDirubah: number;

  @ApiProperty({ required: true })
  idUserPelaku: number;

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  status: number;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
