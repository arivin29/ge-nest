import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlOssiolkDto } from './new_bpt.onl_ossiolk.dto';

export class NewBptOnlOssiolkWidgetDto extends NewBptOnlOssiolkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
