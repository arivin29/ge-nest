import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlTdgDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlTdg: number; // PK

  @ApiProperty({ required: true })
  kapasitas: string;

  @ApiProperty({ required: true })
  latitude: string;

  @ApiProperty({ required: true })
  longitude: string;

  @ApiProperty({ required: true })
  luasGudang: string;
}
