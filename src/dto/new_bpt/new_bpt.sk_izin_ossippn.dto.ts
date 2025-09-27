import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssippnDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssippn: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jenisPendidikan: string;

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  kegunaan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lampiran: string;

  @ApiProperty({ required: false })
  @IsOptional()
  masaBerlaku: string;

  @ApiProperty({ required: false })
  @IsOptional()
  memperhatikan: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noLkp: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nomor: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pimpinan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  rumpunpend: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglPertek: string;
}
