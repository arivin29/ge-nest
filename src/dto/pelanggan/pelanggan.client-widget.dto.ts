import { ApiProperty } from '@nestjs/swagger';
import { PelangganClientDto } from './pelanggan.client.dto';

export class PelangganClientWidgetDto extends PelangganClientDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
