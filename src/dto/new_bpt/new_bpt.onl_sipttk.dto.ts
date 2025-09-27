import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSipttkDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSipttk: number; // PK

  @ApiProperty({ required: true })
  masaBerlaku: string;

  @ApiProperty({ required: true })
  namaSarana: string;

  @ApiProperty({ required: true })
  noStrttk: string;

  @ApiProperty({ required: true })
  praktekKe: boolean;
}
