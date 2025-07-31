import { ApiProperty } from '@nestjs/swagger';
import { PelangganSalesPenjualanDto } from './pelanggan.sales_penjualan.dto';
import { PelangganClientDto } from './pelanggan.client.dto';
import { PelangganKantorDto } from './pelanggan.kantor.dto';

export class PelangganSalesPenjualanReportDto extends PelangganSalesPenjualanDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;

  @ApiProperty({ type: PelangganKantorDto })
  kantor: PelangganKantorDto;
}
