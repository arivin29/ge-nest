import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSipbmDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSipbm: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  noPertek: string;

  @ApiProperty({ required: true })
  noSib: string;

  @ApiProperty({ required: true })
  rekomIbi: string;

  @ApiProperty({ required: true })
  strBerlaku: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglPertek: string;
}
