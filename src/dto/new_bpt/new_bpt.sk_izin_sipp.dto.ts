import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSippDto {
  @ApiProperty({ required: true })
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipp: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPraktek: number;

  @ApiProperty({ required: false })
  @IsOptional()
  kompetensi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noPpni: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: true })
  sarana2: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sipPertama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  strTerbaru: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;

  @ApiProperty({ required: true })
  untukPraktek: string;
}
