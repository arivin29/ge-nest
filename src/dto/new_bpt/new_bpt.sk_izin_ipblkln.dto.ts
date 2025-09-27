import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpblklnDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpblkln: number; // PK

  @ApiProperty({ required: true })
  jenisProgram: string;

  @ApiProperty({ required: true })
  jk: number;

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  nomor: string;

  @ApiProperty({ required: true })
  nomorDis: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglDis: string;
}
