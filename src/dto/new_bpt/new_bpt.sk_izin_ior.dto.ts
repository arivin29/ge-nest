import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIorDto {
  @ApiProperty({ required: true })
  atasNama: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIor: number; // PK

  @ApiProperty({ required: true })
  klasifikasiRs: string;

  @ApiProperty({ required: true })
  namakes: string;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  tglBap: string;

  @ApiProperty({ required: true })
  tglRekom: string;
}
