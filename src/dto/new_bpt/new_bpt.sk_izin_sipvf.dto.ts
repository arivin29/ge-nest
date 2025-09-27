import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSipvfDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipvf: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: true })
  jmlPraktek: number;

  @ApiProperty({ required: true })
  kompetensi: string;

  @ApiProperty({ required: true })
  masaBerlakuStrvf: string;

  @ApiProperty({ required: true })
  namaSarana: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  noStrvf: string;

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
