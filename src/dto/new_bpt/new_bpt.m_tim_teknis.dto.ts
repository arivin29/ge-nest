import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMTimTeknisDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  dinas: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idMTimTeknis: number; // PK

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
