import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpptDto {
  @ApiProperty({ required: false })
  @IsOptional()
  alatmesin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  bangunan: number;

  @ApiProperty({ required: true })
  diktumKedua: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIppt: number; // PK

  @ApiProperty({ required: true })
  jenisDokumen: string;

  @ApiProperty({ required: true })
  jenisKepemilikan: string;

  @ApiProperty({ required: true })
  jumlahBangunan: string;

  @ApiProperty({ required: true })
  jumlahLantai: string;

  @ApiProperty({ required: true })
  kondisiFisik: string;

  @ApiProperty({ required: true })
  lokasi: string;

  @ApiProperty({ required: true })
  luasTanah: string;

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  namaPemilikTanah: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaPermohonan: string;

  @ApiProperty({ required: true })
  poinbperluasan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  poinbperluasan2: string;

  @ApiProperty({ required: true })
  posisiTanah: boolean;

  @ApiProperty({ required: true })
  rencanaLuas: string;

  @ApiProperty({ required: true })
  rencanaPenggunaan: string;

  @ApiProperty({ required: true })
  rencanaTinggi: string;

  @ApiProperty({ required: true })
  rumija: string;

  @ApiProperty({ required: true })
  sklama: string;

  @ApiProperty({ required: true })
  statusTanah: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanah: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRegister: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tkp: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tkw: number;
}
