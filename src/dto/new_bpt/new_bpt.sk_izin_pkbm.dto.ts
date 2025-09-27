import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinPkbmDto {
  @ApiProperty({ required: true })
  badanHukum: string;

  @ApiProperty({ required: false })
  @IsOptional()
  hibah: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinPkbm: number; // PK

  @ApiProperty({ required: true })
  jenisKegiatan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  memperhatikan: string;

  @ApiProperty({ required: true })
  namaPkbm: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: true })
  noBarp: string;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  pemilik: string;

  @ApiProperty({ required: false })
  @IsOptional()
  perihal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBap: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBarp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBerlaku: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;
}
