import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlOssilingkunganDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlOssilingkungan: number; // PK

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noIlingkungan: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: true })
  tglIlingkungan: string;

  @ApiProperty({ required: true })
  tglPertek: string;
}
