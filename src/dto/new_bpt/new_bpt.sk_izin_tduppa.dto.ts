import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinTduppaDto {
  @ApiProperty({ required: true })
  dokumen: string;

  @ApiProperty({ required: true })
  fasilitasUmum: string;

  @ApiProperty({ required: true })
  fasilitasUtama: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinTduppa: number; // PK

  @ApiProperty({ required: true })
  imb: string;

  @ApiProperty({ required: true })
  ippt: string;

  @ApiProperty({ required: true })
  jenisUsaha: string;

  @ApiProperty({ required: true })
  lain: string;

  @ApiProperty({ required: true })
  namaUsaha: string;

  @ApiProperty({ required: true })
  no_5: string;

  @ApiProperty({ required: true })
  no_6: string;

  @ApiProperty({ required: true })
  noAktaPendirian: string;

  @ApiProperty({ required: true })
  nomorTglKajianTeknis: string;

  @ApiProperty({ required: true })
  nomorTglSitePlan: string;

  @ApiProperty({ required: true })
  perizinan: string;

  @ApiProperty({ required: true })
  subjenisUsaha: string;

  @ApiProperty({ required: true })
  tlp: string;

  @ApiProperty({ required: true })
  ukl: string;
}
