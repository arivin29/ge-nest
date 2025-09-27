import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSipbDto {
  @ApiProperty({ required: true })
  berlakuStr: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipb: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jdwlPrtk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jenisPraktek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPraktek: number;

  @ApiProperty({ required: false })
  @IsOptional()
  kompetensi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaSarana: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noPertek: string;

  @ApiProperty({ required: true })
  noSkLama: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  rekomIbi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sipPertama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  strTerbaru: string;

  @ApiProperty({ required: true })
  tempatKerja: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;
}
