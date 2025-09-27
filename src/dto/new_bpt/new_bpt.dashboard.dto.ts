import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptDashboardDto {
  @ApiProperty({ required: false })
  @IsOptional()
  email: boolean;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idDashboard: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  izinMasuk: number;

  @ApiProperty({ required: false })
  @IsOptional()
  izinProses: number;

  @ApiProperty({ required: false })
  @IsOptional()
  izinTerbit: number;

  @ApiProperty({ required: false })
  @IsOptional()
  izinTolak: number;

  @ApiProperty({ required: false })
  @IsOptional()
  nik: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  npp: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  npwp: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  oss: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinArsip: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinBo: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinFo: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinIkp: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinKabid: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinKadis: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinKasi: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinMenungguTtd: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinMenungguTtdSkrd: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinPenyerahan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinSekdis: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinSkrdDiambil: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinSkrdDibayar: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinSkrdTerbit: number;

  @ApiProperty({ required: false })
  @IsOptional()
  posisiIzinVer: number;

  @ApiProperty({ required: false })
  @IsOptional()
  realisasiDamija: number;

  @ApiProperty({ required: false })
  @IsOptional()
  realisasiImbg: number;

  @ApiProperty({ required: false })
  @IsOptional()
  sms: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  tahun: string;

  @ApiProperty({ required: false })
  @IsOptional()
  targetDamija: number;

  @ApiProperty({ required: false })
  @IsOptional()
  targetImbg: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tunggakanDamija: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tunggakanImbg: number;
}
