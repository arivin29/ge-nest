import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsConditionMonitoringDto {
  @ApiProperty({ required: false })
  childnameConditionMonitoring: string;

  @ApiProperty({ required: false })
  code: string;

  @ApiProperty({ required: false })
  conditionMonitoring: string;

  @ApiProperty({ required: true })
  idConditionMonitoring: string;

  @ApiProperty({ required: false })
  isDeleted: number;
}
