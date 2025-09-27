import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlTdiDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idKbli: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlTdi: number; // PK

  @ApiProperty({ required: true })
  investasi: number;

  @ApiProperty({ required: true })
  kapasitasProduk: string;

  @ApiProperty({ required: true })
  komoditiIndustri: string;

  @ApiProperty({ required: true })
  peralatanPembantu: string;

  @ApiProperty({ required: true })
  peralatanUtama: string;

  @ApiProperty({ required: true })
  tenagaPenggerak: string;
}
