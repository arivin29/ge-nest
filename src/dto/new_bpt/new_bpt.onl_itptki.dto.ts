import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlItptkiDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlItptki: number; // PK

  @ApiProperty({ required: true })
  kapasitasTki: string;

  @ApiProperty({ required: true })
  noTki: string;

  @ApiProperty({ required: true })
  tglTki: string;
}
