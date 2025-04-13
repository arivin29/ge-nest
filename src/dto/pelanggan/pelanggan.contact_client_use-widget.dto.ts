import { ApiProperty } from '@nestjs/swagger';
import { PelangganContactClientUseDto } from './pelanggan.contact_client_use.dto';

export class PelangganContactClientUseWidgetDto extends PelangganContactClientUseDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
