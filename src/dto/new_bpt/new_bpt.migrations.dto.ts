import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMigrationsDto {
  @ApiProperty({ required: true })
  batch: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  id: number; // PK

  @ApiProperty({ required: true })
  migration: string;
}
