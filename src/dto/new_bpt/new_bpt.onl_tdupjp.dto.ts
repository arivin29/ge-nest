import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlTdupjpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlTdupjp: number; // PK

  @ApiProperty({ required: true })
  namaUsaha: string;

  @ApiProperty({ required: true })
  noAktaPendirian: string;
}
