import { ApiProperty } from '@nestjs/swagger';
import { NewBptViewIzinDto } from './new_bpt.view_izin.dto';

export class NewBptViewIzinWidgetDto extends NewBptViewIzinDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
