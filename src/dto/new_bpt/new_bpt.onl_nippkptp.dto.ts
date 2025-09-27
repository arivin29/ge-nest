import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNippkptpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNippkptp: number; // PK

  @ApiProperty({ required: true })
  kapasitas: string;

  @ApiProperty({ required: true })
  nomorKesesuaian: string;

  @ApiProperty({ required: true })
  nomorLokasi: string;

  @ApiProperty({ required: true })
  tglKesesuaian: string;

  @ApiProperty({ required: true })
  tglLokasi: string;
}
