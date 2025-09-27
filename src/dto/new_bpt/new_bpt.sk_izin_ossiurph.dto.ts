import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssiurphDto {
  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssiurph: number; // PK

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: true })
  jenisUsaha: string;

  @ApiProperty({ required: false })
  @IsOptional()
  kapasitasPopulasi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  luasBangunan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  luasPrasarana: string;

  @ApiProperty({ required: false })
  @IsOptional()
  luasTanah: string;

  @ApiProperty({ required: true })
  masaBerlaku: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noAkta: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: false })
  @IsOptional()
  produksi: string;

  @ApiProperty({ required: true })
  tglBap: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tka: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tki: number;
}
