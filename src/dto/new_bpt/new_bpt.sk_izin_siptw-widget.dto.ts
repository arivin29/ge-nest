import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiptwDto } from './new_bpt.sk_izin_siptw.dto';

export class NewBptSkIzinSiptwWidgetDto extends NewBptSkIzinSiptwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
