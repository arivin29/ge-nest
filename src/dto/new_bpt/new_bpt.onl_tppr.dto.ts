import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlTpprDto {
  @ApiProperty({ required: true })
  campur: string;

  @ApiProperty({ required: true })
  dewasa: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlTppr: number; // PK

  @ApiProperty({ required: true })
  jenisTernak: string;

  @ApiProperty({ required: true })
  jumlahModal: number;

  @ApiProperty({ required: true })
  jumlahProduksi: string;

  @ApiProperty({ required: true })
  luasKandang: string;

  @ApiProperty({ required: true })
  luasLahan: string;

  @ApiProperty({ required: true })
  macamProduksi: string;

  @ApiProperty({ required: true })
  milikKandang: string;

  @ApiProperty({ required: true })
  milikLahan: string;

  @ApiProperty({ required: true })
  strain: string;
}
