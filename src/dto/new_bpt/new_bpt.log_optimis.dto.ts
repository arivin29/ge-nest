import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptLogOptimisDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idLogOptimis: number; // PK

  @ApiProperty({ required: true })
  log: string;

  @ApiProperty({ required: true })
  tangal: string;
}
