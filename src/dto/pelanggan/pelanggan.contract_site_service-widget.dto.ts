import { ApiProperty } from '@nestjs/swagger';
import { PelangganContractSiteServiceDto } from './pelanggan.contract_site_service.dto';

export class PelangganContractSiteServiceWidgetDto extends PelangganContractSiteServiceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
