import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSiupDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true })
  idKbli: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSiup: number; // PK

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  kbliParam: string;

  @ApiProperty({ required: true })
  kbliTahun: string;

  @ApiProperty({ required: true })
  kelembagaan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nilaiKekayaanBersih: number;

  @ApiProperty({ required: false })
  @IsOptional()
  nomorSiupMutasi: string;

  @ApiProperty({ required: true })
  nomorSiupPusat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nomorTdpMutasi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pindah: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggalSiup: string;

  @ApiProperty({ required: true })
  tgl: string;
}
