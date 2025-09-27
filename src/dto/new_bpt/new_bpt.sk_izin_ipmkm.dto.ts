import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpmkmDto {
  @ApiProperty({ required: true })
  bangunanMakam: string;

  @ApiProperty({ required: true })
  blok: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpmkm: number; // PK

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  tglReg: string;
}
