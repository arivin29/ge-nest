import { ApiProperty } from '@nestjs/swagger';
import { PelangganContractDto } from './pelanggan.contract.dto';

export class PelangganContractWidgetDto extends PelangganContractDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
