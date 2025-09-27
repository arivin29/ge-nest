import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOptimisSipitakDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOptimisSipitak: number; // PK

  @ApiProperty({ required: true })
  tanggal: string;
}
