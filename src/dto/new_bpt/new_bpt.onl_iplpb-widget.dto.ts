import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIplpbDto } from './new_bpt.onl_iplpb.dto';

export class NewBptOnlIplpbWidgetDto extends NewBptOnlIplpbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
