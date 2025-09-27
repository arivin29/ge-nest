import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSipdhDto {
  @ApiProperty({ required: false })
  @IsOptional()
  berlakuStr: string;

  @ApiProperty({ required: true })
  bulanRomawi: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipdh: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jmlPraktek: number;

  @ApiProperty({ required: true })
  ketAlamatPraktek: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  norekDinas: string;

  @ApiProperty({ required: true })
  norekomPdhi: string;

  @ApiProperty({ required: true })
  tempatPraktik: string;

  @ApiProperty({ required: true })
  ttl: string;
}
