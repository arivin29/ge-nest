import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIsalonDto {
  @ApiProperty({ required: true })
  bidangKegiatan: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIsalon: number; // PK
}
