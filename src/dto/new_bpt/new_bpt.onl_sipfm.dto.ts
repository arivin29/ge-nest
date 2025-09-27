import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSipfmDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSifm: number; // PK

  @ApiProperty({ required: true })
  noStr: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: false })
  @IsOptional()
  praktek: string;

  @ApiProperty({ required: true })
  rekomAfi: string;
}
