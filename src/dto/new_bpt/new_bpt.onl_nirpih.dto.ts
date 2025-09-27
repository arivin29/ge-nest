import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNirpihDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNirpih: number; // PK

  @ApiProperty({ required: true })
  nomorRekom: string;

  @ApiProperty({ required: true })
  nomorSiup: string;

  @ApiProperty({ required: true })
  tglRekom: string;

  @ApiProperty({ required: true })
  tglSiup: string;
}
