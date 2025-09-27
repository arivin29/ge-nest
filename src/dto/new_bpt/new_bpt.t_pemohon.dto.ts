import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTPemohonDto {
  @ApiProperty({ required: true })
  alamat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  fax: string;

  @ApiProperty({ required: true })
  handphone: string;

  @ApiProperty({ required: true })
  idKabkot: string;

  @ApiProperty({ required: true })
  idKec: string;

  @ApiProperty({ required: true })
  idKel: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPemohon: number; // PK

  @ApiProperty({ required: true })
  idPemohonIdentitas: number;

  @ApiProperty({ required: true })
  idProv: string;

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true })
  kodePos: number;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  noIdentitas: string;

  @ApiProperty({ required: true })
  npwp: string;

  @ApiProperty({ required: true })
  rt: string;

  @ApiProperty({ required: true })
  rw: string;

  @ApiProperty({ required: true })
  telepon: string;

  @ApiProperty({ required: true })
  tempatLahir: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglLahir: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
