import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceCodeReferenceDto {
  @ApiProperty({ required: true })
  idMaintenanceCodeReference: string;

  @ApiProperty({ required: false })
  idLibReference: string;

  @ApiProperty({ required: false })
  idMaintenanceCode: string;
}
