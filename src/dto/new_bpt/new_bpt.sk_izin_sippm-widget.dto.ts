import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSippmDto } from './new_bpt.sk_izin_sippm.dto';

export class NewBptSkIzinSippmWidgetDto extends NewBptSkIzinSippmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
