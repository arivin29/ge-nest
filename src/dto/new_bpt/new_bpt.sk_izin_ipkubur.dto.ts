import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpkuburDto {
  @ApiProperty({ required: true })
  agama: string;

  @ApiProperty({ required: true })
  blok: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpkubur: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jkPemohon: string;

  @ApiProperty({ required: true })
  lokasiPenguburan: string;

  @ApiProperty({ required: true })
  namaJenazah: string;

  @ApiProperty({ required: true })
  nomor: string;

  @ApiProperty({ required: true })
  tglNo: string;

  @ApiProperty({ required: true })
  tglReg: string;
}
