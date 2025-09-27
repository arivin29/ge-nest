import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIptkesDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idMIzinJenisNakes: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIptkes: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jenisPraktek: string;

  @ApiProperty({ required: true })
  namaFaskes: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noRekom: string;

  @ApiProperty({ required: true })
  noStr: string;

  @ApiProperty({ required: true })
  praktekKe: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRekom: string;

  @ApiProperty({ required: true })
  tglStr: string;
}
