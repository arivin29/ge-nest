import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNiskpbDto {
  @ApiProperty({ required: true })
  forklif: number;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNiskpb: number; // PK

  @ApiProperty({ required: true })
  imb: string;

  @ApiProperty({ required: true })
  izin: string;

  @ApiProperty({ required: true })
  listrik: number;

  @ApiProperty({ required: true })
  luasGudang: number;

  @ApiProperty({ required: true })
  sumberAir: string;
}
