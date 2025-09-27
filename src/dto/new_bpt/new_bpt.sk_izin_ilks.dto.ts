import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIlksDto {
  @ApiProperty({ required: true })
  bap: string;

  @ApiProperty({ required: true })
  bar: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIlks: number; // PK

  @ApiProperty({ required: true })
  klasifikasiLab: string;

  @ApiProperty({ required: true })
  namaLab: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  rip: string;

  @ApiProperty({ required: true })
  tenagaAnalis: string;

  @ApiProperty({ required: true })
  tglBap: string;

  @ApiProperty({ required: true })
  tglBar: string;

  @ApiProperty({ required: true })
  tglRip: string;

  @ApiProperty({ required: true })
  tglSurat: string;
}
