import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinTdupjipDto {
  @ApiProperty({ required: true })
  fasilitasUmum: string;

  @ApiProperty({ required: true })
  fasilitasUtama: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinTdupjip: number; // PK

  @ApiProperty({ required: true })
  imb: string;

  @ApiProperty({ required: true })
  ippt: string;

  @ApiProperty({ required: true })
  namaUsaha: string;

  @ApiProperty({ required: true })
  noAktaPendirian: string;

  @ApiProperty({ required: true })
  nomorTglKajianTeknis: string;

  @ApiProperty({ required: true })
  nomorTglSitePlan: string;

  @ApiProperty({ required: true })
  perizinan: string;

  @ApiProperty({ required: true })
  tlp: string;

  @ApiProperty({ required: true })
  ukl: string;
}
