import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIaDto {
  @ApiProperty({ required: true })
  alamatPm: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIa: number; // PK

  @ApiProperty({ required: true })
  masaBerlakuStra: string;

  @ApiProperty({ required: true })
  namaPm: string;

  @ApiProperty({ required: true })
  namaSarana: string;

  @ApiProperty({ required: true })
  nomorSipa: string;

  @ApiProperty({ required: true })
  nomorStra: string;

  @ApiProperty({ required: true })
  sarana: string;
}
