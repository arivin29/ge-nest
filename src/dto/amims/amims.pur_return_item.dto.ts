import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsPurReturnItemDto {
  @ApiProperty({ required: true })
  idPurReturnItem: string;

  @ApiProperty({ required: false })
  idPurReturn: string;

  @ApiProperty({ required: false })
  idPurPoItem: string;

  @ApiProperty({ required: false })
  qtyReturn: number;

  @ApiProperty({ required: false })
  noteReturnItem: string;

  @ApiProperty({ required: false })
  idPurGrnItem: string;

  @ApiProperty({ required: false })
  statusItem: number;

  @ApiProperty({ required: false })
  idMpart: string;
}
