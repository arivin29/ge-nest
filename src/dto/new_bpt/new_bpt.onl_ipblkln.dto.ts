import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpblklnDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpblkln: number; // PK

  @ApiProperty({ required: true })
  memperhatikan: string;

  @ApiProperty({ required: true })
  nomor: string;

  @ApiProperty({ required: true })
  tgl: string;
}
