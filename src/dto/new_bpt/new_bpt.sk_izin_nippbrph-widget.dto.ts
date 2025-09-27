import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNippbrphDto } from './new_bpt.sk_izin_nippbrph.dto';

export class NewBptSkIzinNippbrphWidgetDto extends NewBptSkIzinNippbrphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
