import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSipaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSipa: number; // PK

  @ApiProperty({ required: true })
  masaBerlakuStra: string;

  @ApiProperty({ required: true })
  namaSarana: string;

  @ApiProperty({ required: true })
  noStra: string;

  @ApiProperty({ required: true })
  praktekKe: number;

  @ApiProperty({ required: true })
  untukPraktik: string;
}
