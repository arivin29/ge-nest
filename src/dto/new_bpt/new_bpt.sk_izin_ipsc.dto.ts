import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpscDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpsc: number; // PK

  @ApiProperty({ required: true })
  namaPsc: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: true })
  penanggungJawab: string;

  @ApiProperty({ required: true })
  tglBapLap: string;
}
