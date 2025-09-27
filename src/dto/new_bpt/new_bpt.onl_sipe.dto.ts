import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSipeDto {
  @ApiProperty({ required: true })
  alamatSarana: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSipe: number; // PK

  @ApiProperty({ required: true })
  namaSarana: string;

  @ApiProperty({ required: true })
  nomorStre: string;
}
