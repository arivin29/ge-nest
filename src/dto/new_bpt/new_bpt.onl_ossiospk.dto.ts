import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssiospkDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssiospk: number; // PK

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  namaKbli: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  tgl: string;
}
