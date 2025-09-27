import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinStptDto {
  @ApiProperty({ required: true })
  agama: string;

  @ApiProperty({ required: true })
  bahan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinStpt: number; // PK

  @ApiProperty({ required: true })
  jenisPerawatan: string;

  @ApiProperty({ required: true })
  jk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  kewarganegaraan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  masaBerlaku: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pekerjaan: string;

  @ApiProperty({ required: true })
  pendidikanFormal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglPertek: string;
}
