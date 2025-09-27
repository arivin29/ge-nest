import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTKelembagaanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  id: number; // PK

  @ApiProperty({ required: true })
  kelembagaan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
