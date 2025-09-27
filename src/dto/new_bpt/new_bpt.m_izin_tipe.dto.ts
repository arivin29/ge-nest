import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinTipeDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinTipe: number; // PK

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ktui: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ktui2: string;

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
