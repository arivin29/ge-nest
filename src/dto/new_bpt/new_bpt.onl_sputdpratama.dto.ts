import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSputdpratamaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSputdpratama: number; // PK

  @ApiProperty({ required: true })
  namaUnit: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;
}
