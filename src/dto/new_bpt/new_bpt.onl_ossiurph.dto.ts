import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssiurphDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssiurph: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  kapasitasPopulasi: string;

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  luasBangunan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  luasTanah: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: false })
  @IsOptional()
  produksi: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tka: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tki: number;
}
