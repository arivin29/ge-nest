import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinRpphanDto } from './new_bpt.sk_izin_rpphan.dto';

export class NewBptSkIzinRpphanWidgetDto extends NewBptSkIzinRpphanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
