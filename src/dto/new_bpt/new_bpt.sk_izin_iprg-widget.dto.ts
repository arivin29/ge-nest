import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIprgDto } from './new_bpt.sk_izin_iprg.dto';

export class NewBptSkIzinIprgWidgetDto extends NewBptSkIzinIprgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
