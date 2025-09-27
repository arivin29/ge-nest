import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinActionDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idAction: number; // PK

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  noUrut: number;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
