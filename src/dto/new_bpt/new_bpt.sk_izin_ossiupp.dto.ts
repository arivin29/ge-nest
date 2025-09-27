import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssiuppDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssiupp: number; // PK

  @ApiProperty({ required: true })
  jabatan: string;

  @ApiProperty({ required: true })
  jenisUsaha: string;

  @ApiProperty({ required: true })
  masaBerlaku: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: true })
  tglPertek: string;
}
