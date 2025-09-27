import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSippaDto {
  @ApiProperty({ required: false })
  @IsOptional()
  dikeluarkan: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSippa: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPraktek: number;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nolama: string;

  @ApiProperty({ required: true })
  nomorStrtgm: string;

  @ApiProperty({ required: true })
  padaTgl: string;

  @ApiProperty({ required: true })
  pendidikan: string;

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
