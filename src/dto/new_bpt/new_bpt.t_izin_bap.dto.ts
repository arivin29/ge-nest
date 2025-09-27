import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinBapDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  file: string;

  @ApiProperty({ required: true })
  file2: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTIzinBap: number; // PK

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tglUpload: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
