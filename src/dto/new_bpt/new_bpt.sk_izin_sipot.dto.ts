import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSipotDto {
  @ApiProperty({ required: true })
  bekerja: string;

  @ApiProperty({ required: false })
  @IsOptional()
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipot: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPraktek: number;

  @ApiProperty({ required: true })
  kehilangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  rekom: string;

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
  tglSkLama: string;
}
