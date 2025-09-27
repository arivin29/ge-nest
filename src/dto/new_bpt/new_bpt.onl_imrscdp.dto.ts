import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlImrscdpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlImrscdp: number; // PK

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  namaApoteker: string;

  @ApiProperty({ required: true })
  namaDA: string;

  @ApiProperty({ required: true })
  namaDB: string;

  @ApiProperty({ required: true })
  nomorApoteker: string;

  @ApiProperty({ required: true })
  nomorDA: string;

  @ApiProperty({ required: true })
  nomorDB: string;
}
