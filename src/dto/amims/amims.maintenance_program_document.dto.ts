import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceProgramDocumentDto {
  @ApiProperty({ required: true, description: 'ID maintenance document' })
  idMaintenanceDocument: string;

  @ApiProperty({ required: false, description: 'Type of document: form or reference' })
  documentType: string;

  @ApiProperty({ required: false, description: 'Document title' })
  documentTitle: string;

  @ApiProperty({ required: false, description: 'Document revision' })
  revision: string;

  @ApiProperty({ required: false, description: 'Active status: yes or no' })
  statusAktif: string;

  @ApiProperty({ required: false, description: 'ID maintenance' })
  idMaintenance: string;

  @ApiProperty({ required: false, description: 'ID maintenance program item' })
  idMaintenanceProgramItem: string;
}
