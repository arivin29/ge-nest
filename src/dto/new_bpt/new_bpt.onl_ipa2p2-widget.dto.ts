import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIpa2p2Dto } from './new_bpt.onl_ipa2p2.dto';

export class NewBptOnlIpa2p2WidgetDto extends NewBptOnlIpa2p2Dto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
