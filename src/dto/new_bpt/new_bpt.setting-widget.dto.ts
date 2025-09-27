import { ApiProperty } from '@nestjs/swagger';
import { NewBptSettingDto } from './new_bpt.setting.dto';

export class NewBptSettingWidgetDto extends NewBptSettingDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
