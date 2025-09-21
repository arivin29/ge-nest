import { ApiProperty } from '@nestjs/swagger';
import { PelangganPurchaseOrderDto } from './pelanggan.purchase_order.dto';
import { PelangganClientDto } from './pelanggan.client.dto';
import { PelangganKantorDto } from './pelanggan.kantor.dto';

export class PelangganPurchaseOrderReportDto extends PelangganPurchaseOrderDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;

  @ApiProperty({ type: PelangganKantorDto })
  kantor: PelangganKantorDto;
}
