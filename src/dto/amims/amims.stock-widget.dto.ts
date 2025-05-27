import { ApiProperty } from '@nestjs/swagger';
import { AmimsStockDto } from './amims.stock.dto';

export class AmimsStockWidgetDto extends AmimsStockDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
