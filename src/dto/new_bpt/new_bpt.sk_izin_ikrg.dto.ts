import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIkrgDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIkrg: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  kehilangan: string;

  @ApiProperty({ required: true })
  namaFasilitas: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  rekomPari: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;

  @ApiProperty({ required: true })
  untukKerja: string;
}
