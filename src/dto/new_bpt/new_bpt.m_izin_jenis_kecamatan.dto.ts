import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinJenisKecamatanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  hk: boolean;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idMIzinJenisKecamatan: number; // PK

  @ApiProperty({ required: true })
  kode: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  noIzin: string;

  @ApiProperty({ required: true })
  nomorUrut: string;

  @ApiProperty({ required: true })
  online: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
