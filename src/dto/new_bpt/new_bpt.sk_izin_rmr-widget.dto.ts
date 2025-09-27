import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinRmrDto } from './new_bpt.sk_izin_rmr.dto';

export class NewBptSkIzinRmrWidgetDto extends NewBptSkIzinRmrDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
