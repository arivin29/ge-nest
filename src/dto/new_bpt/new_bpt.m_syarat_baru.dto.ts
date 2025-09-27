import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMSyaratBaruDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSyaratBaru: number; // PK

  @ApiProperty({ required: true })
  syarat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
