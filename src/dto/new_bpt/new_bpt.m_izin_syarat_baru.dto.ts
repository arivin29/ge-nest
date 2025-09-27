import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinSyaratBaruDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinSyaratBaru: number; // PK

  @ApiProperty({ required: true })
  idMIzinJenisTipeBaru: number;

  @ApiProperty({ required: true })
  idMSyaratBaru: number;

  @ApiProperty({ required: false })
  @IsOptional()
  noUrut: boolean;

  @ApiProperty({ required: true })
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
