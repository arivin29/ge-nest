import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsMaintenanceProgramTaskDto {
  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  idMaintenance: string;

  @ApiProperty({ required: true })
  idMaintenanceProgram: string;

  @ApiProperty({ required: true })
  idMaintenanceProgramTask: string;

  @ApiProperty({ required: false })
  noteTask: string;

  @ApiProperty({ required: false })
  urutan: number;
}
