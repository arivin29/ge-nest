import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSitgDto } from './new_bpt.sk_izin_sitg.dto';

export class NewBptSkIzinSitgWidgetDto extends NewBptSkIzinSitgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
