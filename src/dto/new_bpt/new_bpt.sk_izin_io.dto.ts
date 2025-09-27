import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIoDto {
  @ApiProperty({ required: true })
  badanUsaha: string;

  @ApiProperty({ required: true })
  bah: string;

  @ApiProperty({ required: true })
  bahTgl: string;

  @ApiProperty({ required: true })
  bap: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIo: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  namaOptik: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  rekom: string;

  @ApiProperty({ required: true })
  tglBap: string;

  @ApiProperty({ required: true })
  tglSurat: string;
}
