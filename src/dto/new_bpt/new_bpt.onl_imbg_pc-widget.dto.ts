import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlImbgPcDto } from './new_bpt.onl_imbg_pc.dto';

export class NewBptOnlImbgPcWidgetDto extends NewBptOnlImbgPcDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
