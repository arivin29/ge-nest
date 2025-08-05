import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsEngineerPrisReturnItemDto {
  @ApiProperty({ required: false })
  idEngineerPrisItem: string;

  @ApiProperty({ required: true })
  idEngineerPrisReturnItem: string;

  @ApiProperty({ required: false })
  isAccept: string;

  @ApiProperty({ required: false })
  qtyReturn: number;
}
