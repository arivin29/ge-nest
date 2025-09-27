import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSipfisDto {
  @ApiProperty({ required: true })
  bekerja: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipfis: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: true })
  jenisSip: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPraktek: number;

  @ApiProperty({ required: false })
  @IsOptional()
  kehilangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: false })
  @IsOptional()
  rekomIfi: string;

  @ApiProperty({ required: true })
  sarana: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sipPertama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  strTerbaru: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;
}
