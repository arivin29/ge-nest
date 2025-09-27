import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIptkmDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIptkm: number; // PK

  @ApiProperty({ required: true })
  jenis: string;

  @ApiProperty({ required: true })
  nomorRekom: string;

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: false })
  @IsOptional()
  praktek: string;

  @ApiProperty({ required: true })
  tglStr: string;
}
