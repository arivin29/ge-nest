import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOptimisSipitakIlokDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOptimisSipitakIlok: number; // PK

  @ApiProperty({ required: true })
  tanggal: string;
}
