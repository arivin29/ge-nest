import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsCurrencyDto {
  @ApiProperty({ required: true })
  idCurrency: string;

  @ApiProperty({ required: false })
  idMcurrency: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  effectiveDate: string;

  @ApiProperty({ required: false })
  noteCurrency: string;

  @ApiProperty({ required: false })
  oldValue: number;

  @ApiProperty({ required: false })
  newValue: number;

  @ApiProperty({ required: false })
  forcurrency: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
