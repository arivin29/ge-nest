import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiptslDto } from './new_bpt.sk_izin_siptsl.dto';

export class NewBptSkIzinSiptslWidgetDto extends NewBptSkIzinSiptslDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
