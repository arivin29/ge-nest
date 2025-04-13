import { ApiProperty } from '@nestjs/swagger';
import { PelangganInvoiceDto } from './pelanggan.invoice.dto';
import { PelangganContractDto } from './pelanggan.contract.dto';

export class PelangganInvoiceReportDto extends PelangganInvoiceDto {
  @ApiProperty({ type: PelangganContractDto })
  contract: PelangganContractDto;
}
