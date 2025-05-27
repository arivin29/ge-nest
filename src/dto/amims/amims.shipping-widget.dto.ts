import { ApiProperty } from '@nestjs/swagger';
import { AmimsShippingDto } from './amims.shipping.dto';

export class AmimsShippingWidgetDto extends AmimsShippingDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
