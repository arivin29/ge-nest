import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiptgDto } from './new_bpt.sk_izin_siptg.dto';

export class NewBptSkIzinSiptgWidgetDto extends NewBptSkIzinSiptgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
