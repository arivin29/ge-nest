import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceProgramDocumentDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  from: string;

  @ApiProperty({ required: true })
  idMaintenanceDocument: string;

  @ApiProperty({ required: true })
  idMaintenanceProgram: string;

  @ApiProperty({ required: true })
  idMaintenanceProgramDocument: string;

  @ApiProperty({ required: false })
  keterangan: string;

  @ApiProperty({ required: false })
  reference: string;

  @ApiProperty({ required: false })
  revisi: string;

  @ApiProperty({ required: false })
  revision: string;

  @ApiProperty({ required: false })
  title: string;

  @ApiProperty({ required: false })
  workshetForm: string;
}
