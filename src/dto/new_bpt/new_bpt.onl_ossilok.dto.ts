import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssilokDto {
  @ApiProperty({ required: false })
  @IsOptional()
  alatmesin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  bangunan: number;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssilok: number; // PK

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanah: number;

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
