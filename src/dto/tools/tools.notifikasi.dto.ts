import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsNotifikasiDto {
  @ApiProperty({ required: true })
  idNotifikasi: string;

  @ApiProperty({ required: false })
  forModule: string;

  @ApiProperty({ required: false })
  idMasterNotifikasi: string;

  @ApiProperty({ required: false })
  idMasterNotifikasiLevel: string;

  @ApiProperty({ required: false })
  idPegawai: string;

  @ApiProperty({ required: false })
  status: string;

  @ApiProperty({ required: false })
  pesan: string;

  @ApiProperty({ required: false })
  forModuleId: string;

  @ApiProperty({ required: false })
  param_1: string;

  @ApiProperty({ required: false })
  param_2: string;

  @ApiProperty({ required: false })
  param_3: string;

  @ApiProperty({ required: false })
  forModuleRouter: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  jenis: string;
}
