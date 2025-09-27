import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinNirpihDto {
  @ApiProperty({ required: true })
  balaiBesar: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinNirpih: number; // PK

  @ApiProperty({ required: true })
  import: string;

  @ApiProperty({ required: true })
  instalasi: string;

  @ApiProperty({ required: true })
  noSurat: string;

  @ApiProperty({ required: true })
  nomorRekom: string;

  @ApiProperty({ required: true })
  nomorSiup: string;

  @ApiProperty({ required: true })
  nomorTdp: string;

  @ApiProperty({ required: true })
  nomorTdup: string;

  @ApiProperty({ required: true })
  nomorTeknis: string;

  @ApiProperty({ required: true })
  perihal: string;

  @ApiProperty({ required: true })
  skPajak: string;

  @ApiProperty({ required: true })
  tglNomor: string;

  @ApiProperty({ required: true })
  tglRekom: string;

  @ApiProperty({ required: true })
  tglSiup: string;

  @ApiProperty({ required: true })
  tglSurat: string;

  @ApiProperty({ required: true })
  tglTdp: string;

  @ApiProperty({ required: true })
  tglTdup: string;
}
