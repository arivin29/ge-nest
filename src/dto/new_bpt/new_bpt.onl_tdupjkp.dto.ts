import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlTdupjkpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlTdupjkp: number; // PK

  @ApiProperty({ required: true })
  namaUsaha: string;

  @ApiProperty({ required: true })
  noAktaPendirian: string;
}
