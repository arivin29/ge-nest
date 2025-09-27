import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinOssiuiDto {
  @ApiProperty({ required: false })
  @IsOptional()
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinOssiui: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  investasi: number;

  @ApiProperty({ required: false })
  @IsOptional()
  klasifikasi: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  namaKbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nib: string;

  @ApiProperty({ required: true })
  noBap: string;

  @ApiProperty({ required: true })
  noSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nomorKbli: string;

  @ApiProperty({ required: false })
  @IsOptional()
  perihal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  statusBangunan: string;

  @ApiProperty({ required: true })
  tglBap: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSkLama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tka: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tki: number;
}
