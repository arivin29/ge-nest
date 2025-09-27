import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTFormPendukungDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  file: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTFormPendukung: number; // PK

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  tgl: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
