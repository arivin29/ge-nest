import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssiaDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssia: number; // PK

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSipa: string;

  @ApiProperty({ required: true })
  noStrta: string;

  @ApiProperty({ required: false })
  @IsOptional()
  penanggungJwb: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSipa: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglStrtaa: string;
}
