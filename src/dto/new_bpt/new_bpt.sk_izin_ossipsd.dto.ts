import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssipsdDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssipsd: number; // PK

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  lahan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  masaBerlaku: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaSekolah: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  penanggungJawab: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBap: string;

  @ApiProperty({ required: true })
  tglPertek: string;
}
