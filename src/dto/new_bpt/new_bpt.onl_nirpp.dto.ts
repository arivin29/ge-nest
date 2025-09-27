import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNirppDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNirpp: number; // PK

  @ApiProperty({ required: true })
  jenisPakan: string;

  @ApiProperty({ required: true })
  kodePakan: string;

  @ApiProperty({ required: true })
  namaDagang: string;

  @ApiProperty({ required: true })
  noSertifikat: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  tgls: string;
}
