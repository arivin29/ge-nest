import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpalDto } from './new_bpt.sk_izin_ipal.dto';

export class NewBptSkIzinIpalWidgetDto extends NewBptSkIzinIpalDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
