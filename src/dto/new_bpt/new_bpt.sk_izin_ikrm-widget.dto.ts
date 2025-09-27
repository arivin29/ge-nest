import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIkrmDto } from './new_bpt.sk_izin_ikrm.dto';

export class NewBptSkIzinIkrmWidgetDto extends NewBptSkIzinIkrmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
