import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIptkswtDto } from './new_bpt.sk_izin_iptkswt.dto';

export class NewBptSkIzinIptkswtWidgetDto extends NewBptSkIzinIptkswtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
