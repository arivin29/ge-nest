import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssipkDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssipk: number; // PK

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
