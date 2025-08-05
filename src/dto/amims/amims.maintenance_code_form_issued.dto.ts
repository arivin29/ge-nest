import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceCodeFormIssuedDto {
  @ApiProperty({ required: false })
  idLibFormIssued: string;

  @ApiProperty({ required: false })
  idMaintenanceCode: string;

  @ApiProperty({ required: true })
  idMaintenanceCodeFormIssued: string;
}
