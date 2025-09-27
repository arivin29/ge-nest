import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpmzenaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpmzena: number; // PK

  @ApiProperty({ required: true })
  jumlahMobil: string;

  @ApiProperty({ required: true })
  nopol: string;
}
