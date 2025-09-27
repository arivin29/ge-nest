import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIprthppDto } from './new_bpt.sk_izin_iprthpp.dto';

export class NewBptSkIzinIprthppWidgetDto extends NewBptSkIzinIprthppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
