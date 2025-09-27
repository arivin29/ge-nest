import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinBjbDto } from './new_bpt.t_izin_bjb.dto';

export class NewBptTIzinBjbWidgetDto extends NewBptTIzinBjbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
