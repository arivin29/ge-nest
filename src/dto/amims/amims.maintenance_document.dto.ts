import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceDocumentDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  documentTitle: string;

  @ApiProperty({ required: false })
  documentType: string;

  @ApiProperty({ required: false })
  idMaintenance: string;

  @ApiProperty({ required: true })
  idMaintenanceDocument: string;

  @ApiProperty({ required: false })
  revision: string;

  @ApiProperty({ required: false })
  statusAktif: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
