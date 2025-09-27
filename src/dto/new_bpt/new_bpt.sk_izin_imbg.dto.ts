import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinImbgDto {
  @ApiProperty({ required: true })
  atasNama: string;

  @ApiProperty({ required: true })
  bertindak: string;

  @ApiProperty({ required: true })
  dp: string;

  @ApiProperty({ required: true })
  fungsiBangunan: string;

  @ApiProperty({ required: true })
  gambar: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinImbg: number; // PK

  @ApiProperty({ required: true })
  imbGlobal: string;

  @ApiProperty({ required: true })
  jenisImb: string;

  @ApiProperty({ required: true })
  jk: number;

  @ApiProperty({ required: true })
  jumlah: number;

  @ApiProperty({ required: true })
  kondisiFisik: string;

  @ApiProperty({ required: true })
  luasBg: string;

  @ApiProperty({ required: true })
  luasPb: string;

  @ApiProperty({ required: true })
  luasTanah: string;

  @ApiProperty({ required: true })
  noDlh: string;

  @ApiProperty({ required: true })
  noSkLama: string;

  @ApiProperty({ required: true })
  pembangunan: string;

  @ApiProperty({ required: true })
  rab: number;

  @ApiProperty({ required: true })
  statusTanah: string;

  @ApiProperty({ required: true })
  tanggalGlobal: string;

  @ApiProperty({ required: true })
  tdlDlh: string;

  @ApiProperty({ required: true })
  tglDp: string;

  @ApiProperty({ required: true })
  tglGambar: string;

  @ApiProperty({ required: true })
  tglSurat: string;
}
