import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSiupDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idKbli: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSiup: number; // PK

  @ApiProperty({ required: true })
  kelembagaan: string;

  @ApiProperty({ required: true })
  nilaiKekayaanBersih: number;

  @ApiProperty({ required: true })
  nomorSiupPusat: string;
}
