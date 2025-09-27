import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIpa2p2Dto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIpa2p2: number; // PK

  @ApiProperty({ required: true })
  nomor: string;

  @ApiProperty({ required: true })
  tgl: string;
}
