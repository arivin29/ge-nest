import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinDrivethruDto } from './new_bpt.t_izin_drivethru.dto';

export class NewBptTIzinDrivethruWidgetDto extends NewBptTIzinDrivethruDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
