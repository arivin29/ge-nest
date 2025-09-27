import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIlabkmDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIlabkm: number; // PK

  @ApiProperty({ required: true })
  klasifikasi: string;

  @ApiProperty({ required: true })
  namaLab: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  tglBapLap: string;

  @ApiProperty({ required: true })
  tglRekom: string;
}
