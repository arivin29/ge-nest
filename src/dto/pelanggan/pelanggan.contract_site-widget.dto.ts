import { ApiProperty } from '@nestjs/swagger';
import { PelangganContractSiteDto } from './pelanggan.contract_site.dto';

export class PelangganContractSiteWidgetDto extends PelangganContractSiteDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
