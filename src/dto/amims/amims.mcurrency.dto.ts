import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMcurrencyDto {
  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  currency: string;

  @ApiProperty({ required: true })
  idMcurrency: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  statusCurrency: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  usdRate: number;
}
