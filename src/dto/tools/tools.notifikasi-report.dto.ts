import { ApiProperty } from '@nestjs/swagger';
import { ToolsNotifikasiDto } from './tools.notifikasi.dto';
import { ToolsMasterNotifikasiDto } from './tools.master_notifikasi.dto';
import { ToolsMasterNotifikasiLevelDto } from './tools.master_notifikasi_level.dto';
import { ToolsPegawaiDto } from './tools.pegawai.dto';

export class ToolsNotifikasiReportDto extends ToolsNotifikasiDto {
  @ApiProperty({ type: ToolsMasterNotifikasiDto })
  masterNotifikasi: ToolsMasterNotifikasiDto;

  @ApiProperty({ type: ToolsMasterNotifikasiLevelDto })
  masterNotifikasiLevel: ToolsMasterNotifikasiLevelDto;

  @ApiProperty({ type: ToolsPegawaiDto })
  pegawai: ToolsPegawaiDto;
}
