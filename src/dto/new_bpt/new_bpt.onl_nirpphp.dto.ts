import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlNirpphpDto {
  @ApiProperty({ required: true })
  alatTransport: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlNirpphp: number; // PK

  @ApiProperty({ required: true })
  nama: string;

  @ApiProperty({ required: true })
  nos: string;

  @ApiProperty({ required: true })
  perihals: string;

  @ApiProperty({ required: true })
  tanggalAkhir: string;

  @ApiProperty({ required: true })
  tanggalAwal: string;

  @ApiProperty({ required: true })
  tgls: string;

  @ApiProperty({ required: true })
  tujuan: string;
}
