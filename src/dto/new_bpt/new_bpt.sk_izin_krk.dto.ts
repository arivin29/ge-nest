import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinKrkDto {
  @ApiProperty({ required: false })
  @IsOptional()
  diktumPerumahan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  diktumTambahanPerumahan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gsJalan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gsJalan2: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gsPagar: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gsPagar2: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gsSaluran: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gsSaluran2: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinKrk: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPemohon: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlSerti: string;

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  kegiatan: string;

  @ApiProperty({ required: true })
  ketentuanNo7: string;

  @ApiProperty({ required: false })
  @IsOptional()
  koefDasar: string;

  @ApiProperty({ required: false })
  @IsOptional()
  koefDasar2: string;

  @ApiProperty({ required: false })
  @IsOptional()
  koefHijau: string;

  @ApiProperty({ required: false })
  @IsOptional()
  koefHijau2: string;

  @ApiProperty({ required: false })
  @IsOptional()
  koefLantai: string;

  @ApiProperty({ required: true })
  koordinat: string;

  @ApiProperty({ required: true })
  koordinatSetuju: string;

  @ApiProperty({ required: true })
  luasTanahSetuju: string;

  @ApiProperty({ required: false })
  @IsOptional()
  memperhatikan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  memperhatikan1: string;

  @ApiProperty({ required: false })
  @IsOptional()
  memperhatikan2: string;

  @ApiProperty({ required: false })
  @IsOptional()
  memperhatikan3: string;

  @ApiProperty({ required: false })
  @IsOptional()
  memperhatikan4: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPkkpr: string;

  @ApiProperty({ required: false })
  @IsOptional()
  plusDashuk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  plusDesa: string;

  @ApiProperty({ required: false })
  @IsOptional()
  plusDinas: string;

  @ApiProperty({ required: false })
  @IsOptional()
  plusKec: string;

  @ApiProperty({ required: false })
  @IsOptional()
  plusTembusan: string;

  @ApiProperty({ required: true })
  rencanaLuas: string;

  @ApiProperty({ required: true })
  rencanaPenggunaan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  rencanaTapak: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tambahPemohon: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tinggiBangunan: string;
}
