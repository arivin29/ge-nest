import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOsspkbmDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOsspkbm: number; // PK

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nib: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggalPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBap: string;
}
