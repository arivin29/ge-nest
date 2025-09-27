import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSlsdepotDto } from './new_bpt.sk_izin_slsdepot.dto';

export class NewBptSkIzinSlsdepotWidgetDto extends NewBptSkIzinSlsdepotDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
