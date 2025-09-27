import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSputdmadyaDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSputdmadya: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  namaUnit: string;

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  noSurat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pemilik: string;

  @ApiProperty({ required: false })
  @IsOptional()
  penanggungJawab: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRekom: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSurat: string;
}
