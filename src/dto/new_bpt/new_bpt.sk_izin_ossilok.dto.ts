import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssilokDto {
  @ApiProperty({ required: true })
  adm: string;

  @ApiProperty({ required: false })
  @IsOptional()
  alatmesin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  bangunan: number;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssilok: number; // PK

  @ApiProperty({ required: true })
  kepemilikan: number;

  @ApiProperty({ required: false })
  @IsOptional()
  luas: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noIlok: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pojok: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanah: number;

  @ApiProperty({ required: true })
  tembusan: string;

  @ApiProperty({ required: true })
  tglIlok: string;

  @ApiProperty({ required: true })
  tglPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tkp: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tkw: number;
}
