import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssilingkunganDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssilingkungan: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jenisUsaha: string;

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
