import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTLogTtdDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  detail: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTLogTtd: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  ket: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
