import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinRphDto } from './new_bpt.sk_izin_rph.dto';

export class NewBptSkIzinRphWidgetDto extends NewBptSkIzinRphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
