import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSikfisDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSikfis: number; // PK

  @ApiProperty({ required: true })
  nomorStr: string;

  @ApiProperty({ required: true })
  rekomIfi: string;
}
