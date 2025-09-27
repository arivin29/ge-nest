import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIupptDto {
  @ApiProperty({ required: true })
  ho: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIuppt: number; // PK

  @ApiProperty({ required: true })
  imb: string;

  @ApiProperty({ required: true })
  luas: string;

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  status: string;

  @ApiProperty({ required: true })
  tgl: string;
}
