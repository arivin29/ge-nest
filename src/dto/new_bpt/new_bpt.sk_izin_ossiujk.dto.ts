import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssiujkDto {
  @ApiProperty({ required: false })
  @IsOptional()
  email: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssiujk: number; // PK

  @ApiProperty({ required: true })
  kodeKlasifikasi: string;

  @ApiProperty({ required: true })
  kualifikasiBadanUsaha: string;

  @ApiProperty({ required: true })
  kualifikasiBidang: string;

  @ApiProperty({ required: true })
  namaPjtbu: string;

  @ApiProperty({ required: false })
  @IsOptional()
  no: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: true })
  nomorNib: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;
}
