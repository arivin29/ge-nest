import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIlabkmDto } from './new_bpt.sk_izin_ilabkm.dto';

export class NewBptSkIzinIlabkmWidgetDto extends NewBptSkIzinIlabkmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
