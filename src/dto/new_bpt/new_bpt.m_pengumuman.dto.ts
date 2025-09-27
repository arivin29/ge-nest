import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMPengumumanDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  file: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idPengumuman: number; // PK

  @ApiProperty({ required: true })
  isi: string;

  @ApiProperty({ required: true })
  status: boolean;

  @ApiProperty({ required: true })
  tanggal: string;

  @ApiProperty({ required: true })
  tipe: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: true })
  user: number;
}
