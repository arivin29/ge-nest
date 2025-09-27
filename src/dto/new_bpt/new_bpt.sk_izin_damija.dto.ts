import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinDamijaDto {
  @ApiProperty({ required: true })
  berlaku: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinDamija: number; // PK

  @ApiProperty({ required: true })
  jenisPenggunaan: string;

  @ApiProperty({ required: true })
  kecamatan: string;

  @ApiProperty({ required: true })
  kelurahan: string;

  @ApiProperty({ required: true })
  keputusanBipati: string;

  @ApiProperty({ required: true })
  lokasi: string;

  @ApiProperty({ required: true })
  luasPemakaian: string;

  @ApiProperty({ required: true })
  rencanaPenggunaan: string;

  @ApiProperty({ required: true })
  ruasJalan: string;

  @ApiProperty({ required: true })
  tglBap: string;

  @ApiProperty({ required: true })
  tglBapl: string;
}
