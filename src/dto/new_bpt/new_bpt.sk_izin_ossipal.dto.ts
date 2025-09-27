import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssipalDto {
  @ApiProperty({ required: false })
  @IsOptional()
  email: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssipal: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jabatan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jenisUsaha: string;

  @ApiProperty({ required: true })
  nib: string;

  @ApiProperty({ required: true })
  noPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noShilang: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sumberAir: string;

  @ApiProperty({ required: true })
  tglPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglShilang: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;
}
