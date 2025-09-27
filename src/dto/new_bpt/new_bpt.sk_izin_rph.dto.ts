import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinRphDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinRph: number; // PK

  @ApiProperty({ required: true })
  kapasitas: string;

  @ApiProperty({ required: true })
  lokasi: string;

  @ApiProperty({ required: true })
  luasBangunan: string;

  @ApiProperty({ required: true })
  luasPrasarana: string;

  @ApiProperty({ required: true })
  luasTanah: string;

  @ApiProperty({ required: true })
  noAkta: string;

  @ApiProperty({ required: true })
  noTeknis: string;

  @ApiProperty({ required: true })
  npwp: string;

  @ApiProperty({ required: true })
  produksi: string;

  @ApiProperty({ required: true })
  ternak: string;

  @ApiProperty({ required: true })
  tglSurat: string;

  @ApiProperty({ required: true })
  tglTeknis: string;

  @ApiProperty({ required: true })
  tkAsing: string;

  @ApiProperty({ required: true })
  tkInd: string;
}
