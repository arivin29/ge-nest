import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinItptkiDto } from './new_bpt.sk_izin_itptki.dto';

export class NewBptSkIzinItptkiWidgetDto extends NewBptSkIzinItptkiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
