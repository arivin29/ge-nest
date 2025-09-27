import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinKkprDto {
  @ApiProperty({ required: false })
  @IsOptional()
  gsJalan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gsPagar: string;

  @ApiProperty({ required: false })
  @IsOptional()
  gsSaluran: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinKkpr: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  identitas: string;

  @ApiProperty({ required: false })
  @IsOptional()
  inputDesa: string;

  @ApiProperty({ required: true })
  isianNo15: string;

  @ApiProperty({ required: false })
  @IsOptional()
  isianNo8: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlSerti: string;

  @ApiProperty({ required: true })
  jumlahBangunan: string;

  @ApiProperty({ required: true })
  jumlahLantai: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ketentuanNo3: string;

  @ApiProperty({ required: false })
  @IsOptional()
  koefDasar: string;

  @ApiProperty({ required: false })
  @IsOptional()
  koefHijau: string;

  @ApiProperty({ required: false })
  @IsOptional()
  koefLantai: string;

  @ApiProperty({ required: true })
  koordinat: string;

  @ApiProperty({ required: true })
  koordinatSetuju: string;

  @ApiProperty({ required: true })
  lokasi: string;

  @ApiProperty({ required: true })
  luasTanah: string;

  @ApiProperty({ required: true })
  luasTanahSetuju: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaKeg: string;

  @ApiProperty({ required: true })
  namaPemilikTanah: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaPermohonan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noAlashak: string;

  @ApiProperty({ required: true })
  pernyataan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  plusDashuk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  plusDinas: string;

  @ApiProperty({ required: true })
  rencanaLuas: string;

  @ApiProperty({ required: true })
  rencanaPenggunaan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  rencanaTapak: string;

  @ApiProperty({ required: true })
  rencanaTeknis: string;

  @ApiProperty({ required: true })
  rencanaTinggi: string;

  @ApiProperty({ required: true })
  statusTanah: string;

  @ApiProperty({ required: true })
  statusTanah1: string;

  @ApiProperty({ required: true })
  statusTanah2: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBap: string;
}
