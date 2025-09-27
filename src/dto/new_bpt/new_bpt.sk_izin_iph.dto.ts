import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIphDto {
  @ApiProperty({ required: true })
  baplapanganNomor: string;

  @ApiProperty({ required: true })
  baplapanganTgl: string;

  @ApiProperty({ required: true })
  barNomor: string;

  @ApiProperty({ required: true })
  barTgl: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIph: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  penanggungJawab: string;
}
