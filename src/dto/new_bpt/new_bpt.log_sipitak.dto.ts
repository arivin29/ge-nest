import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptLogSipitakDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idLogSipitak: number; // PK

  @ApiProperty({ required: true })
  idOptimisSipitak: number;

  @ApiProperty({ required: true })
  tanggal: string;
}
