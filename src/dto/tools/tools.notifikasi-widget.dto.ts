import { ApiProperty } from '@nestjs/swagger';
import { ToolsNotifikasiDto } from './tools.notifikasi.dto';

export class ToolsNotifikasiWidgetDto extends ToolsNotifikasiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
