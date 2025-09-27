import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSettingDto {
  @ApiProperty({ required: false })
  @IsOptional()
  antrianPpo: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  antrianPpr: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinTest: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSetting: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  jamPelayananMulai: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jamPelayananSelesai: string;

  @ApiProperty({ required: true })
  namaDinas: string;

  @ApiProperty({ required: false })
  @IsOptional()
  optimis: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pendelegasian: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sotk: string;

  @ApiProperty({ required: true })
  ttdDigital: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tupoksi: string;
}
