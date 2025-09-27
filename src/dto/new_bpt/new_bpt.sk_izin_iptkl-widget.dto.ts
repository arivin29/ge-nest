import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIptklDto } from './new_bpt.sk_izin_iptkl.dto';

export class NewBptSkIzinIptklWidgetDto extends NewBptSkIzinIptklDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
