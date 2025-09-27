import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinStptDto } from './new_bpt.sk_izin_stpt.dto';

export class NewBptSkIzinStptWidgetDto extends NewBptSkIzinStptDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
