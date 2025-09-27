import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSipradioDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipradio: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPraktek: number;

  @ApiProperty({ required: true })
  kehilangan: string;

  @ApiProperty({ required: true })
  namaFasilitas: string;

  @ApiProperty({ required: true })
  noSkLama: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  rekomPari: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sipPertama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  strTerbaru: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;

  @ApiProperty({ required: true })
  untukKerja: string;
}
