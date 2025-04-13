import { ApiProperty } from '@nestjs/swagger';
import { PelangganServiceDto } from './pelanggan.service.dto';

export class PelangganServiceWidgetDto extends PelangganServiceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
