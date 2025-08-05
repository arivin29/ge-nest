import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceCodeReferenceDto {
  @ApiProperty({ required: false })
  idLibReference: string;

  @ApiProperty({ required: false })
  idMaintenanceCode: string;

  @ApiProperty({ required: true })
  idMaintenanceCodeReference: string;
}
