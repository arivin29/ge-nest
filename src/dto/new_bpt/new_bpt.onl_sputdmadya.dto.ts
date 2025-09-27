import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSputdmadyaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSputdmadya: number; // PK

  @ApiProperty({ required: true })
  namaUnit: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
