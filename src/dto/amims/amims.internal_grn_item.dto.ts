import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsInternalGrnItemDto {
  @ApiProperty({ required: true })
  idInternalGrnItem: string;

  @ApiProperty({ required: false })
  idInternalGrn: string;

  @ApiProperty({ required: false })
  idMpart: string;

  @ApiProperty({ required: false })
  qtyGrn: number;

  @ApiProperty({ required: false })
  statusItem: string;

  @ApiProperty({ required: false })
  remark: string;

  @ApiProperty({ required: false })
  idPart: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  idEngineerPrisItem: string;
}
