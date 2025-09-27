import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinTdgDto {
  @ApiProperty({ required: true })
  golGudang: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinTdg: number; // PK

  @ApiProperty({ required: true })
  kapasitasGudang: string;

  @ApiProperty({ required: true })
  lat: string;

  @ApiProperty({ required: true })
  lon: string;

  @ApiProperty({ required: true })
  luasGudang: string;
}
