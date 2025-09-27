import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIkrDto } from './new_bpt.sk_izin_ikr.dto';

export class NewBptSkIzinIkrWidgetDto extends NewBptSkIzinIkrDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
