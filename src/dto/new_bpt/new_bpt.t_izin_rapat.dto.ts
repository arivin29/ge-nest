import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinRapatDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  file: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTIzinRapat: number; // PK

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tglUplRapat: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
