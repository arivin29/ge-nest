import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIptkesDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIptkes: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jenisPraktek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaFaskes: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noStr: string;

  @ApiProperty({ required: false })
  @IsOptional()
  praktekKe: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglStr: string;
}
