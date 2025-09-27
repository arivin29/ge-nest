import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinJenisActionDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idAction: number;

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenisAction: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
