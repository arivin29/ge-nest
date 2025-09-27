import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIprthDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIprth: number; // PK

  @ApiProperty({ required: true })
  jumlahPohon: string;

  @ApiProperty({ required: true })
  tujuanPemotongan: string;
}
