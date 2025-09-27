import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlPbgDto {
  @ApiProperty({ required: true })
  alamatPbg: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlPbg: number; // PK

  @ApiProperty({ required: true })
  jenisBng: string;

  @ApiProperty({ required: true })
  jml: number;

  @ApiProperty({ required: true })
  luasBng: number;

  @ApiProperty({ required: true })
  luasTanah: number;

  @ApiProperty({ required: true })
  namaPemohon: string;

  @ApiProperty({ required: true })
  namaPerusahaan: string;

  @ApiProperty({ required: true })
  noregPbg: string;

  @ApiProperty({ required: true })
  tipeBng: string;
}
