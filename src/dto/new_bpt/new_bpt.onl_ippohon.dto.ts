import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIppohonDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIppohon: number; // PK

  @ApiProperty({ required: true })
  jumlahPohon: string;

  @ApiProperty({ required: true })
  tujuanPemotongan: string;
}
