import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlIkkeDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlIkke: number; // PK

  @ApiProperty({ required: true })
  klasifikasiKlinik: string;

  @ApiProperty({ required: true })
  rekom: string;
}
