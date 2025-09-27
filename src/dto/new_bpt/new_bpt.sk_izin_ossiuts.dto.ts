import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssiutsDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssiuts: number; // PK

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

  @ApiProperty({ required: false })
  @IsOptional()
  noShilang: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noTerbit: string;

  @ApiProperty({ required: false })
  @IsOptional()
  perihal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  perihalShilang: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sebsedBerakhir: string;

  @ApiProperty({ required: false })
  @IsOptional()
  teknis: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglBerlaku: string;

  @ApiProperty({ required: true })
  tglPertek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglShilang: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglTerbit: string;
}
