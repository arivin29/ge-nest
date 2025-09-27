import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlImtaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlImta: number; // PK

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: true })
  jenisKelamin: string;

  @ApiProperty({ required: true })
  jenisUsaha: string;

  @ApiProperty({ required: true })
  kewarganegaraan: string;

  @ApiProperty({ required: true })
  perpanjanganKe: string;
}
