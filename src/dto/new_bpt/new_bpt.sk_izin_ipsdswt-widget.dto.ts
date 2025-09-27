import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpsdswtDto } from './new_bpt.sk_izin_ipsdswt.dto';

export class NewBptSkIzinIpsdswtWidgetDto extends NewBptSkIzinIpsdswtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
