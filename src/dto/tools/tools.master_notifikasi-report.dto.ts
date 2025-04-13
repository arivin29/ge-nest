import { ApiProperty } from '@nestjs/swagger';
import { ToolsMasterNotifikasiDto } from './tools.master_notifikasi.dto';
import { PelangganKantorDto } from '../pelanggan/pelanggan.kantor.dto';
import { ToolsDepartemenDto } from './tools.departemen.dto';
import { ToolsDivisiDto } from './tools.divisi.dto';
import { ToolsSectionDto } from './tools.section.dto';

export class ToolsMasterNotifikasiReportDto extends ToolsMasterNotifikasiDto {
  @ApiProperty({ type: PelangganKantorDto })
  kantor: PelangganKantorDto;

  @ApiProperty({ type: ToolsDepartemenDto })
  departemen: ToolsDepartemenDto;

  @ApiProperty({ type: ToolsDivisiDto })
  divisi: ToolsDivisiDto;

  @ApiProperty({ type: ToolsSectionDto })
  section: ToolsSectionDto;
}
