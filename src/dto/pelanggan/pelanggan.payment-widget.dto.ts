import { ApiProperty } from '@nestjs/swagger';
import { PelangganPaymentDto } from './pelanggan.payment.dto';

export class PelangganPaymentWidgetDto extends PelangganPaymentDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
