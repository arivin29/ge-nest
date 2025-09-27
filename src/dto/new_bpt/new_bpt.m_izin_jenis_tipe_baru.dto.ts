import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinJenisTipeBaruDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenisTipeBaru: number; // PK

  @ApiProperty({ required: true })
  idIzinTipe: number;

  @ApiProperty({ required: false })
  @IsOptional()
  noUrut: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
