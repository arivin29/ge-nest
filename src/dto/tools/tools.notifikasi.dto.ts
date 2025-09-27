import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsNotifikasiDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forModule: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forModuleId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  forModuleRouter: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idMasterNotifikasi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idMasterNotifikasiLevel: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idNotifikasi: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idPegawai: string;

  @ApiProperty({ required: false })
  @IsOptional()
  jenis: string;

  @ApiProperty({ required: false })
  @IsOptional()
  param_1: string;

  @ApiProperty({ required: false })
  @IsOptional()
  param_2: string;

  @ApiProperty({ required: false })
  @IsOptional()
  param_3: string;

  @ApiProperty({ required: false })
  @IsOptional()
  pesan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
