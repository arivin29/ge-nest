import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpdokssDto } from './new_bpt.sk_izin_ipdokss.dto';

export class NewBptSkIzinIpdokssWidgetDto extends NewBptSkIzinIpdokssDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
