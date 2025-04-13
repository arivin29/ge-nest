import { ApiProperty } from '@nestjs/swagger';
import { PelangganKantorDto } from './pelanggan.kantor.dto';

export class PelangganKantorWidgetDto extends PelangganKantorDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
