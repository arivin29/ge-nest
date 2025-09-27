import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIprmDto {
  @ApiProperty({ required: true })
  bekerja: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIprm: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPraktek: number;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  noStr: string;

  @ApiProperty({ required: false })
  @IsOptional()
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
