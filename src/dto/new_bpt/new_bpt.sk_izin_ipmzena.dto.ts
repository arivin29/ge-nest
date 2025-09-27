import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpmzenaDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpmzena: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jumlahMobil: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noRek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nopol: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglReg: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRek: string;
}
