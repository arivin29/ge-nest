import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMpcSelfMaintenanceDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  dateAccQa: string;

  @ApiProperty({ required: false })
  dateMaintenance: string;

  @ApiProperty({ required: false })
  doc: string;

  @ApiProperty({ required: false })
  idEngineerRti: string;

  @ApiProperty({ required: true })
  idMpcSelfMaintenance: string;

  @ApiProperty({ required: false })
  idSite: string;

  @ApiProperty({ required: false })
  idUserMaintenance: string;

  @ApiProperty({ required: false })
  idUserQa: string;

  @ApiProperty({ required: false })
  numberMaintenance: string;

  @ApiProperty({ required: false })
  reportMaintenance: string;

  @ApiProperty({ required: false })
  statusMaintenance: string;

  @ApiProperty({ required: false })
  typeMaintenance: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
