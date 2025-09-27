import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNisppkaDto {
  @ApiProperty({ required: true })
  alasan: string;

  @ApiProperty({ required: true })
  bidangUsaha: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNisppka: number; // PK

  @ApiProperty({ required: true })
  pesertaAsing: string;

  @ApiProperty({ required: true })
  pesertaIndo: string;
}
