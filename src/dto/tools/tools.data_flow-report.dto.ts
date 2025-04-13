import { ApiProperty } from '@nestjs/swagger';
import { ToolsDataFlowDto } from './tools.data_flow.dto';
import { PelangganKantorDto } from '../pelanggan/pelanggan.kantor.dto';
import { ToolsDivisiDto } from './tools.divisi.dto';
import { ToolsDepartemenDto } from './tools.departemen.dto';
import { ToolsSectionDto } from './tools.section.dto';
import { ToolsJabatanDto } from './tools.jabatan.dto';
import { ToolsUserDto } from './tools.user.dto';

export class ToolsDataFlowReportDto extends ToolsDataFlowDto {
  @ApiProperty({ type: PelangganKantorDto })
  kantor: PelangganKantorDto;

  @ApiProperty({ type: ToolsDivisiDto })
  divisi: ToolsDivisiDto;

  @ApiProperty({ type: ToolsDepartemenDto })
  departemen: ToolsDepartemenDto;

  @ApiProperty({ type: ToolsSectionDto })
  section: ToolsSectionDto;

  @ApiProperty({ type: ToolsJabatanDto })
  jabatan: ToolsJabatanDto;

  @ApiProperty({ type: ToolsUserDto })
  user: ToolsUserDto;
}
