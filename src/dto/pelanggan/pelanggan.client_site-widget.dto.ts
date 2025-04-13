import { ApiProperty } from '@nestjs/swagger';
import { PelangganClientSiteDto } from './pelanggan.client_site.dto';

export class PelangganClientSiteWidgetDto extends PelangganClientSiteDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
