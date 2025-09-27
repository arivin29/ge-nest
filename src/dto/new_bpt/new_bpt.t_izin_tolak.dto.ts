import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinTolakDto {
  @ApiProperty({ required: false })
  @IsOptional()
  alasan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  file: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true })
  idIzinPosisiTolak: boolean;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinTolak: number; // PK

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true })
  idUserArsip: boolean;

  @ApiProperty({ required: true })
  idUserBo: boolean;

  @ApiProperty({ required: true })
  idUserKabid: boolean;

  @ApiProperty({ required: true })
  idUserKadin: boolean;

  @ApiProperty({ required: true })
  idUserPenerbitan: boolean;

  @ApiProperty({ required: true })
  idUserPenyerahan: boolean;

  @ApiProperty({ required: true })
  idUserPetugas: boolean;

  @ApiProperty({ required: true })
  idUserSekdis: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  noPenolakan: string;

  @ApiProperty({ required: true })
  noUrut: number;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglAmbil: string;

  @ApiProperty({ required: true })
  tglArsip: string;

  @ApiProperty({ required: true })
  tglKbd: string;

  @ApiProperty({ required: true })
  tglKsb: string;

  @ApiProperty({ required: true })
  tglProses: string;

  @ApiProperty({ required: true })
  tglSekdis: string;

  @ApiProperty({ required: true })
  tglTerbit: string;

  @ApiProperty({ required: true })
  tglTtd: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
