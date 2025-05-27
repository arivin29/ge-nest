import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsConditionMonitoringDto {
  @ApiProperty({ required: true })
  idConditionMonitoring: string;

  @ApiProperty({ required: false })
  conditionMonitoring: string;

  @ApiProperty({ required: false })
  childnameConditionMonitoring: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  code: string;
}
