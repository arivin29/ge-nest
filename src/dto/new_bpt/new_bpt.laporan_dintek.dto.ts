import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptLaporanDintekDto {
  @ApiProperty({ required: true })
  alamat: string;

  @ApiProperty({ required: true })
  idKec: string;

  @ApiProperty({ required: true })
  idKel: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idLaporanDintek: number; // PK

  @ApiProperty({ required: true })
  idUserDintek: number;

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  masaBerlaku: string;

  @ApiProperty({ required: true })
  namaFile: string;

  @ApiProperty({ required: true })
  namaLaporan: string;

  @ApiProperty({ required: true })
  namaPemohon: string;

  @ApiProperty({ required: true })
  namaPerusahaan: string;

  @ApiProperty({ required: true })
  nomorDokumen: string;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: true })
  tglTerbit: string;
}
