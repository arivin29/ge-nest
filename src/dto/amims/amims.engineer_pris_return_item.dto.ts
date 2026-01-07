import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsEngineerPrisReturnItemDto {
  @ApiProperty({ required: true })
  idEngineerPrisReturnItem: string;

  @ApiProperty({ required: false })
  idEngineerPrisItem: string;

  @ApiProperty({ required: false })
  qtyReturn: number;

  @ApiProperty({ required: false })
  isAccept: string;
}
