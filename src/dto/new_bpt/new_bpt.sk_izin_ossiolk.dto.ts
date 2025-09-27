import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssiolkDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssiolk: number; // PK

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  klasifikasiLab: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lab: string;

  @ApiProperty({ required: false })
  @IsOptional()
  masaBerlaku: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  penanggung: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: true })
  tglPertek: string;
}
