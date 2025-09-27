import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSippDto } from './new_bpt.sk_izin_sipp.dto';

export class NewBptSkIzinSippWidgetDto extends NewBptSkIzinSippDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
