import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipekDto } from './new_bpt.sk_izin_sipek.dto';

export class NewBptSkIzinSipekWidgetDto extends NewBptSkIzinSipekDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
