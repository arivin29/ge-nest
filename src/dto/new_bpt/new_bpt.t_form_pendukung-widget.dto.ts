import { ApiProperty } from '@nestjs/swagger';
import { NewBptTFormPendukungDto } from './new_bpt.t_form_pendukung.dto';

export class NewBptTFormPendukungWidgetDto extends NewBptTFormPendukungDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
