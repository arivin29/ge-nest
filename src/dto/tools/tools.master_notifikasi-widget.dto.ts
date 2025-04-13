import { ApiProperty } from '@nestjs/swagger';
import { ToolsMasterNotifikasiDto } from './tools.master_notifikasi.dto';

export class ToolsMasterNotifikasiWidgetDto extends ToolsMasterNotifikasiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
