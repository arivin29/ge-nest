import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinTdpDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true })
  idKbli: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinTdp: number; // PK

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  kbliParam: string;

  @ApiProperty({ required: false })
  @IsOptional()
  kbliTahun: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nomorTdpLama: string;

  @ApiProperty({ required: true })
  nomorTdpMutasi: string;

  @ApiProperty({ required: true })
  perbaharuanKe: string;

  @ApiProperty({ required: true })
  pindah: string;

  @ApiProperty({ required: true })
  status: string;

  @ApiProperty({ required: true })
  tanggalSiup: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: false })
  @IsOptional()
  undangUndang: string;
}
