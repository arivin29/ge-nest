import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptLaporanKecamatanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  bulan: string;

  @ApiProperty({ required: true })
  idIzinJenisKecamatan: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idLaporanKecamatan: number; // PK

  @ApiProperty({ required: true })
  idUserKecamatan: number;

  @ApiProperty({ required: true })
  izinMasuk: number;

  @ApiProperty({ required: true })
  izinProses: number;

  @ApiProperty({ required: true })
  izinTerbit: number;

  @ApiProperty({ required: true })
  izinTolak: number;

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  namaFile: string;

  @ApiProperty({ required: true })
  namaLaporan: string;

  @ApiProperty({ required: true })
  tanggal: string;
}
