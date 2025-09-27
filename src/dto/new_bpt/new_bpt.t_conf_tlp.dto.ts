import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTConfTlpDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idPemohon: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTConfTlp: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  noTlp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  token: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
