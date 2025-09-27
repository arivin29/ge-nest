import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinTdiDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true })
  idKbli: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinTdi: number; // PK

  @ApiProperty({ required: true })
  investasi: number;

  @ApiProperty({ required: true })
  kapasitasProduk: string;

  @ApiProperty({ required: true })
  kbli: string;

  @ApiProperty({ required: true })
  kbliParam: string;

  @ApiProperty({ required: true })
  kbliTahun: string;

  @ApiProperty({ required: true })
  komoditiIndustri: string;

  @ApiProperty({ required: true })
  nipik: string;

  @ApiProperty({ required: true })
  peralatanPembantu: string;

  @ApiProperty({ required: true })
  peralatanUtama: string;

  @ApiProperty({ required: true })
  tenagaPenggerak: string;
}
